import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface WasteCarrier {
  registrationNumber: string;
  name: string;
  address: string;
  postcode: string;
  registrationType: string;
  tier: 'Upper' | 'Lower';
  expiryDate?: string;
}

interface UseWasteCarriersDbParams {
  searchQuery?: string;
  searchType?: 'location' | 'business' | 'registration';
  limit?: number;
  offset?: number;
}

export const useWasteCarriersDb = ({ 
  searchQuery = '',
  searchType = 'location',
  limit = 20, 
  offset = 0 
}: UseWasteCarriersDbParams = {}) => {
  const [carriers, setCarriers] = useState<WasteCarrier[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCarriers = async () => {
      setLoading(true);
      try {
        let query = supabase
          .from('waste_carriers')
          .select('*', { count: 'exact' })
          .eq('tier', 'Upper')
          .order('holder_name', { ascending: true })
          .range(offset, offset + limit - 1);

        // Apply search filters based on type
        if (searchQuery.trim()) {
          const searchTerm = searchQuery.trim();

          if (searchType === 'location') {
            // Search in locality, postcode, or address
            query = query.or(`locality.ilike.%${searchTerm}%,postcode.ilike.%${searchTerm}%,address.ilike.%${searchTerm}%`);
          } else if (searchType === 'business') {
            // Search by business name
            query = query.ilike('holder_name', `%${searchTerm}%`);
          } else if (searchType === 'registration') {
            // Search by registration number
            query = query.ilike('registration_number', `%${searchTerm}%`);
          }
        }

        const { data, error, count } = await query;

        if (error) throw error;

        // Transform to match the expected interface
        const transformedCarriers: WasteCarrier[] = (data || []).map(carrier => ({
          registrationNumber: carrier.registration_number,
          name: carrier.holder_name,
          address: carrier.address,
          postcode: carrier.postcode || '',
          registrationType: carrier.registration_type || 'Carrier, Broker, Dealer',
          tier: carrier.tier as 'Upper' | 'Lower',
          expiryDate: carrier.expiry_date || undefined,
        }));

        setCarriers(transformedCarriers);
        setTotal(count || 0);
      } catch (error) {
        console.error('Error fetching waste carriers:', error);
        toast({
          title: 'Error',
          description: 'Failed to load waste carriers. Please try again.',
          variant: 'destructive',
        });
        setCarriers([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCarriers();
  }, [searchQuery, searchType, limit, offset]);

  return { carriers, loading, total };
};
