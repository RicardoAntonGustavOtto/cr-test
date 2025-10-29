import { useState, useEffect } from 'react';
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

interface UseWasteCarriersParams {
  searchQuery?: string;
  searchType?: 'location' | 'business' | 'registration';
  limit?: number;
  offset?: number;
}

export const useWasteCarriers = ({ 
  searchQuery = '',
  searchType = 'location',
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
        // For location searches, we need to fetch more results and filter client-side
        const apiLimit = searchType === 'location' && searchQuery.trim() ? '100' : limit.toString();
        
        const params = new URLSearchParams({
          _limit: apiLimit,
          _offset: offset.toString(),
        });

        // Only use name-search for business name searches
        if (searchQuery.trim() && searchType === 'business') {
          params.append('name-search', searchQuery);
        }
        
        // For registration number searches
        if (searchQuery.trim() && searchType === 'registration') {
          params.append('registrationNumber', searchQuery);
        }

        const proxyUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/waste-carriers-proxy?${params}`;
        
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch waste carriers');
        }

        const data = await response.json();
        
        // Filter for Upper Tier only (registration numbers starting with CBDU)
        const items = data.items || [];
        
        let filteredItems = items.filter((item: any) => {
          const regNumber = item.registrationNumber || '';
          return regNumber.startsWith('CBDU');
        });

        // Apply location filtering client-side if searching by location
        if (searchType === 'location' && searchQuery.trim()) {
          const searchTerm = searchQuery.toLowerCase().trim();
          filteredItems = filteredItems.filter((item: any) => {
            const siteAddress = item.site?.siteAddress;
            const address = (siteAddress?.address || '').toLowerCase();
            const locality = (siteAddress?.locality || '').toLowerCase();
            const postcode = (siteAddress?.postcode || '').toLowerCase();
            
            return address.includes(searchTerm) || 
                   locality.includes(searchTerm) || 
                   postcode.includes(searchTerm);
          });
        }

        const upperTierCarriers = filteredItems
          .slice(0, limit) // Apply limit after filtering
          .map((item: any) => {
            const holderName = item.holder?.name || 'Unknown';
            const siteAddress = item.site?.siteAddress;
            const fullAddress = siteAddress?.address || 'Address not available';
            const postcode = siteAddress?.postcode || '';
            const registrationType = item.registrationType?.label || 'Carrier, Broker, Dealer';
            const expiryDate = item.expiryDate || '';
            
            return {
              registrationNumber: item.registrationNumber || 'N/A',
              name: holderName,
              address: fullAddress,
              postcode: postcode,
              registrationType: registrationType,
              tier: 'Upper' as const,
              expiryDate: expiryDate,
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
  }, [searchQuery, searchType, limit, offset]);

  return { carriers, loading, total };
};
