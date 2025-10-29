-- Create waste_carriers table to store all carriers from the UK Government API
CREATE TABLE IF NOT EXISTS public.waste_carriers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_number TEXT UNIQUE NOT NULL,
  holder_name TEXT NOT NULL,
  company_number TEXT,
  address TEXT NOT NULL,
  locality TEXT,
  postcode TEXT,
  registration_type TEXT,
  tier TEXT NOT NULL,
  expiry_date DATE,
  registration_date DATE,
  applicant_type TEXT,
  is_claimed BOOLEAN DEFAULT FALSE,
  last_synced_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX idx_waste_carriers_postcode ON public.waste_carriers(postcode);
CREATE INDEX idx_waste_carriers_locality ON public.waste_carriers(locality);
CREATE INDEX idx_waste_carriers_tier ON public.waste_carriers(tier);
CREATE INDEX idx_waste_carriers_registration_number ON public.waste_carriers(registration_number);

-- Enable full-text search on name and address
CREATE INDEX idx_waste_carriers_search ON public.waste_carriers 
  USING gin(to_tsvector('english', holder_name || ' ' || address || ' ' || COALESCE(locality, '')));

-- Enable Row Level Security
ALTER TABLE public.waste_carriers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read waste carriers (public data)
CREATE POLICY "Anyone can view waste carriers"
  ON public.waste_carriers
  FOR SELECT
  USING (true);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to update updated_at
CREATE TRIGGER update_waste_carriers_updated_at
  BEFORE UPDATE ON public.waste_carriers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();