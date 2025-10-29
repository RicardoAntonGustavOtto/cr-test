-- Create profiles table for user data
CREATE TABLE public.profiles (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name text,
  business_email text,
  phone text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, business_email, phone)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.email,
    new.raw_user_meta_data->>'phone'
  );
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Add claimed_by column to waste_carriers
ALTER TABLE public.waste_carriers
ADD COLUMN claimed_by uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
ADD COLUMN claimed_at timestamp with time zone,
ADD COLUMN subscription_plan text,
ADD COLUMN subscription_billing text;

-- Update RLS policies for waste_carriers
CREATE POLICY "Users can view their claimed listings"
  ON public.waste_carriers
  FOR SELECT
  USING (auth.uid() = claimed_by OR claimed_by IS NULL);

CREATE POLICY "Users can update their claimed listings"
  ON public.waste_carriers
  FOR UPDATE
  USING (auth.uid() = claimed_by);

-- Create claims table to track claim requests
CREATE TABLE public.claim_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_number text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_role text NOT NULL,
  website text,
  description text,
  services text[],
  areas_served text,
  selected_plan text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on claim_requests
ALTER TABLE public.claim_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own claim requests"
  ON public.claim_requests
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create claim requests"
  ON public.claim_requests
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Trigger for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_claim_requests_updated_at
  BEFORE UPDATE ON public.claim_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();