import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

export interface WasteCarrier {
  registrationNumber: string;
  name: string;
  address: string;
  registrationType: string;
  tier: 'Upper' | 'Lower';
}

interface UseWasteCarriersParams {
  searchQuery?: string;
  limit?: number;
  offset?: number;
}

export const useWasteCarriers = ({ 
  searchQuery = '', 
  limit = 20, 
  offset = 0 
}: UseWasteCarriersParams = {}) => {
  const [carriers, setCarriers] = useState<WasteCarrier[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCarriers = async () => {
      setLoading(true);
      try {
        // Build the API URL with parameters for our proxy
        const params = new URLSearchParams({
          _limit: limit.toString(),
          _offset: offset.toString(),
        });

        // Add search query if provided
        if (searchQuery.trim()) {
          params.append('name-search', searchQuery);
        }

        const proxyUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/waste-carriers-proxy?${params}`;
        
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch waste carriers');
        }

        const data = await response.json();
        
        // Filter for Upper Tier only (registration numbers starting with CBDU)
        const items = data.items || [];
        
        const upperTierCarriers = items
          .filter((item: any) => {
            const regNumber = item.registrationNumber || '';
            return regNumber.startsWith('CBDU');
          })
          .map((item: any) => {
            const holderName = item.holder?.name || 'Unknown';
            const siteAddress = item.site?.siteAddress;
            const fullAddress = siteAddress?.address || 'Address not available';
            const registrationType = item.registrationType?.label || 'Carrier, Broker, Dealer';
            
            return {
              registrationNumber: item.registrationNumber || 'N/A',
              name: holderName,
              address: fullAddress,
              registrationType: registrationType,
              tier: 'Upper' as const,
            };
          });

        setCarriers(upperTierCarriers);
        setTotal(upperTierCarriers.length);
      } catch (error) {
        console.error('Error fetching waste carriers:', error);
        toast({
          title: 'Error',
          description: 'Failed to load waste carriers. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCarriers();
  }, [searchQuery, limit, offset]);

  return { carriers, loading, total };
};
