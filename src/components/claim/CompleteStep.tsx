import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ClaimFormData } from "@/pages/ClaimListing";
import { WasteCarrierDetail } from "@/hooks/useWasteCarrierDetail";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

interface CompleteStepProps {
  carrier: WasteCarrierDetail;
  formData: ClaimFormData;
}

export const CompleteStep = ({ carrier, formData }: CompleteStepProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Submit claim data to backend
    console.log('Claim submission:', { carrier, formData });
    
    toast({
      title: "Claim Request Submitted Successfully!",
      description: "We'll review your request and get back to you within 2 business days.",
    });
  }, [carrier, formData]);

  return (
    <Card className="text-center">
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
              <span>We'll send a verification email to <strong>{formData.email}</strong></span>
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
            We've sent a confirmation email with next steps
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
    </Card>
  );
};
