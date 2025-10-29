import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { ClaimFormData } from "@/pages/ClaimListing";
import { WasteCarrierDetail } from "@/hooks/useWasteCarrierDetail";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface CompleteStepProps {
  carrier: WasteCarrierDetail;
  formData: ClaimFormData;
}

export const CompleteStep = ({ carrier, formData }: CompleteStepProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const submitClaim = async () => {
      setIsSubmitting(true);
      
      try {
        let userId = user?.id;

        // If user doesn't exist, create account
        if (!userId) {
          const redirectUrl = `${window.location.origin}/`;
          
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
              emailRedirectTo: redirectUrl,
              data: {
                full_name: formData.fullName,
                phone: formData.phone,
              },
            },
          });

          if (signUpError) {
            toast({
              title: "Account Creation Failed",
              description: signUpError.message,
              variant: "destructive",
            });
            setIsSubmitting(false);
            return;
          }

          userId = signUpData.user?.id;
        }

        if (!userId) {
          toast({
            title: "Error",
            description: "Unable to create or retrieve user account.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }

        // Submit claim request
        const { error } = await supabase.from('claim_requests').insert({
          registration_number: carrier.registrationNumber,
          user_id: userId,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          business_role: formData.businessRole,
          website: formData.website || null,
          description: formData.description || null,
          services: formData.services.length > 0 ? formData.services : null,
          areas_served: formData.areasServed || null,
          selected_plan: formData.selectedPlan,
          status: 'pending',
        });

        if (error) throw error;

        toast({
          title: "Claim Request Submitted Successfully!",
          description: "We'll review your request and get back to you within 2 business days.",
        });
        
        setIsSubmitting(false);
      } catch (error) {
        console.error('Error submitting claim:', error);
        toast({
          title: "Submission Error",
          description: "There was an issue submitting your claim. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    };

    submitClaim();
  }, [carrier, formData, user]);

  return (
    <Card className="text-center">
      {isSubmitting ? (
        <CardContent className="pt-16 pb-16">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-secondary" />
            <p className="text-lg font-medium">Creating your account and submitting claim...</p>
          </div>
        </CardContent>
      ) : (
        <>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>
            </div>
            <CardTitle className="text-3xl">Claim Submitted Successfully!</CardTitle>
            <CardDescription className="text-base mt-2">
              Thank you for claiming your business listing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 border border-border rounded-lg p-6 text-left">
              <h3 className="font-semibold mb-3">What happens next?</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground">1.</span>
                  <span>We've created your account with <strong>{formData.email}</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground">2.</span>
                  <span>Our team will review your claim within 2 business days</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground">3.</span>
                  <span>You may be asked to provide additional documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground">4.</span>
                  <span>Once verified, you'll receive full access to manage your listing</span>
                </li>
              </ol>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                You can now log in using your email and password
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/search-results')}
                variant="outline"
              >
                Back to Directory
              </Button>
              <Button
                onClick={() => navigate(`/provider/${carrier.registrationNumber}`)}
                className="bg-secondary hover:bg-secondary/90"
              >
                View Listing
              </Button>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
};
