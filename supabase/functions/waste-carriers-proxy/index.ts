import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const searchQuery = url.searchParams.get('name-search') || '';
    const limit = url.searchParams.get('_limit') || '20';
    const offset = url.searchParams.get('_offset') || '0';
    const registrationNumber = url.searchParams.get('registrationNumber') || '';

    console.log('Proxy request:', { searchQuery, limit, offset, registrationNumber });

    // Build the UK Government API URL
    const params = new URLSearchParams({
      _limit: limit,
      _offset: offset,
    });

    if (searchQuery) {
      params.append('name-search', searchQuery);
    }

    if (registrationNumber) {
      params.append('registrationNumber', registrationNumber);
    }

    const apiUrl = `https://environment.data.gov.uk/public-register/waste-carriers-brokers/registration.json?${params}`;
    
    console.log('Fetching from:', apiUrl);

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    console.log('API response received, items:', data.items?.length || 0);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in waste-carriers-proxy:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: errorMessage,
      items: [] 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
