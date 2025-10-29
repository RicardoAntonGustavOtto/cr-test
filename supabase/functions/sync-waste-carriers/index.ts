import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.76.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Starting waste carriers sync...');

    let allCarriers: any[] = [];
    let offset = 0;
    const limit = 100;
    let hasMore = true;

    // Fetch all carriers from the UK Government API
    while (hasMore && offset < 10000) { // Safety limit
      const apiUrl = `https://environment.data.gov.uk/public-register/waste-carriers-brokers/registration.json?_limit=${limit}&_offset=${offset}`;
      console.log(`Fetching from API: offset=${offset}`);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const items = data.items || [];

      if (items.length === 0) {
        hasMore = false;
        break;
      }

      // Filter for Upper Tier carriers only
      const upperTierCarriers = items.filter((item: any) => {
        const regNumber = item.registrationNumber || '';
        return regNumber.startsWith('CBDU');
      });

      allCarriers = [...allCarriers, ...upperTierCarriers];
      offset += limit;

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(`Fetched ${allCarriers.length} upper tier carriers from API`);

    // Transform and upsert into database
    const carriersToInsert = allCarriers.map((item: any) => {
      const siteAddress = item.site?.siteAddress;
      return {
        registration_number: item.registrationNumber || 'N/A',
        holder_name: item.holder?.name || 'Unknown',
        company_number: item.holder?.companyNumber || null,
        address: siteAddress?.address || 'Address not available',
        locality: siteAddress?.locality || null,
        postcode: siteAddress?.postcode || null,
        registration_type: item.registrationType?.label || 'Carrier, Broker, Dealer',
        tier: item.tier?.label || 'Upper',
        expiry_date: item.expiryDate || null,
        registration_date: item.registrationDate || null,
        applicant_type: item.applicantType?.prefLabel || null,
        last_synced_at: new Date().toISOString(),
      };
    });

    // Batch upsert in chunks of 1000
    const chunkSize = 1000;
    let insertedCount = 0;

    for (let i = 0; i < carriersToInsert.length; i += chunkSize) {
      const chunk = carriersToInsert.slice(i, i + chunkSize);
      
      const { error } = await supabase
        .from('waste_carriers')
        .upsert(chunk, { 
          onConflict: 'registration_number',
          ignoreDuplicates: false 
        });

      if (error) {
        console.error(`Error inserting chunk ${i / chunkSize + 1}:`, error);
        throw error;
      }

      insertedCount += chunk.length;
      console.log(`Inserted ${insertedCount}/${carriersToInsert.length} carriers`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Synced ${insertedCount} waste carriers`,
        total: insertedCount,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error syncing waste carriers:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
