-- Add services column to waste_carriers table
ALTER TABLE public.waste_carriers 
ADD COLUMN services TEXT[] DEFAULT '{}';

-- Add an index for better performance on service filtering
CREATE INDEX idx_waste_carriers_services ON public.waste_carriers USING GIN(services);

-- Add a comment explaining the column
COMMENT ON COLUMN public.waste_carriers.services IS 'Array of service types offered by the waste carrier';