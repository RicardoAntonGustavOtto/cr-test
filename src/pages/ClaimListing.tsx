import { useParams, useNavigate } from "react-router-dom";
import { useWasteCarrierDetail } from "@/hooks/useWasteCarrierDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClaimStepIndicator } from "@/components/claim/ClaimStepIndicator";
import { VerifyBusinessStep } from "@/components/claim/VerifyBusinessStep";
import { AddDetailsStep } from "@/components/claim/AddDetailsStep";
import { ChoosePlanStep } from "@/components/claim/ChoosePlanStep";
import { CompleteStep } from "@/components/claim/CompleteStep";
import { useAuth } from "@/contexts/AuthContext";

export interface ClaimFormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  businessRole: string;
  password: string;
  // Step 2
  website: string;
  description: string;
  services: string[];
  customService: string;
  areasServed: string;
  // Step 3
  selectedPlan: string;
}

const ClaimListing = () => {
  const { registrationNumber } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { carrier, loading } = useWasteCarrierDetail(registrationNumber || '');
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState<ClaimFormData>({
    fullName: '',
    email: '',
    phone: '',
    businessRole: '',
    password: '',
    website: '',
    description: '',
    services: [],
    customService: '',
    areasServed: '',
    selectedPlan: '',
  });

  const updateFormData = (data: Partial<ClaimFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!carrier) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">Listing not found</p>
              <div className="text-center mt-4">
                <Button onClick={() => navigate('/search-results')}>
                  Back to Directory
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-muted/30 py-16 min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <ClaimStepIndicator currentStep={currentStep} />

          {currentStep === 1 && (
            <VerifyBusinessStep
              carrier={carrier}
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onCancel={() => navigate(-1)}
            />
          )}

          {currentStep === 2 && (
            <AddDetailsStep
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}

          {currentStep === 3 && (
            <ChoosePlanStep
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}

          {currentStep === 4 && (
            <CompleteStep
              carrier={carrier}
              formData={formData}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClaimListing;
