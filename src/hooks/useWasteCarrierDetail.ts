import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

export interface WasteCarrierDetail {
  registrationNumber: string;
  name: string;
  address: string;
  postcode: string;
  registrationType: string;
  tier: 'Upper' | 'Lower';
  registrationDate?: string;
  expiryDate?: string;
  companyNumber?: string;
  phone?: string;
  email?: string;
}

export const useWasteCarrierDetail = (registrationNumber: string) => {
  const [carrier, setCarrier] = useState<WasteCarrierDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarrierDetail = async () => {
      if (!registrationNumber) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const proxyUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/waste-carriers-proxy?registrationNumber=${registrationNumber}`;
        
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error('Carrier not found');
        }

        const data = await response.json();
        const item = data.items?.[0];

        if (!item) {
          throw new Error('Carrier not found');
        }

        const regNumber = item.registrationNumber || item.registration?.registrationNumber || registrationNumber;
        const tier = regNumber.startsWith('CBDU') ? 'Upper' : 'Lower';

        setCarrier({
          registrationNumber: regNumber,
          name: item.name || item.businessName || 'Unknown',
          address: item.address || item.postalAddress || 'Address not available',
          postcode: item.postcode || '',
          registrationType: item.registrationType || 'Carrier, Broker, Dealer',
          tier,
          registrationDate: item.registrationDate || item.dateRegistered,
          expiryDate: item.expiryDate || item.dateExpires,
          companyNumber: item.companyNumber,
          phone: item.phoneNumber || item.phone,
          email: item.email || item.emailAddress,
        });
      } catch (err) {
        console.error('Error fetching carrier detail:', err);
        setError(err instanceof Error ? err.message : 'Failed to load carrier details');
        toast({
          title: 'Error',
          description: 'Failed to load carrier details. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCarrierDetail();
  }, [registrationNumber]);

  return { carrier, loading, error };
};
