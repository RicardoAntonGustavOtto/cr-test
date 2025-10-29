import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ClaimFormData } from "@/pages/ClaimListing";
import { Check, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ChoosePlanStepProps {
  formData: ClaimFormData;
  updateFormData: (data: Partial<ClaimFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const ChoosePlanStep = ({
  formData,
  updateFormData,
  onNext,
  onBack,
}: ChoosePlanStepProps) => {
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'premium'>('standard');
  const [standardBilling, setStandardBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [premiumBilling, setPremiumBilling] = useState<'monthly' | 'yearly'>('monthly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const billingPeriod = selectedPlan === 'standard' ? standardBilling : premiumBilling;
    updateFormData({ selectedPlan: `${selectedPlan}-${billingPeriod}` });
    onNext();
  };

  return (
    <Card>
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-foreground">
          Choose Your Subscription Plan
        </CardTitle>
        <CardDescription className="text-base mt-2">
          Select a plan that suits your business needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard Plan */}
            <div
              className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedPlan === 'standard'
                  ? 'border-secondary bg-secondary/5'
                  : 'border-border hover:border-secondary/50'
              }`}
              onClick={() => setSelectedPlan('standard')}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary">
                  FREE
                </Badge>
              </div>
              
              <div className="absolute top-4 right-4">
                {selectedPlan === 'standard' ? (
                  <CheckCircle className="w-6 h-6 text-secondary fill-secondary" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-border" />
                )}
              </div>

              <div className="mt-4 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Standard</h3>
                <p className="text-sm text-muted-foreground">
                  Basic listing with all essential features
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Enhanced business profile</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Appear higher in search results</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Business contact details</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>20 Waste transfer notes</span>
                </li>
              </ul>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 mb-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-secondary">
                  <Check className="w-4 h-4" />
                  Always Free
                </div>
              </div>

              <RadioGroup
                value={standardBilling}
                onValueChange={(value) => setStandardBilling(value as 'monthly' | 'yearly')}
                disabled={selectedPlan !== 'standard'}
              >
                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background mb-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="monthly" id="standard-monthly" />
                    <Label htmlFor="standard-monthly" className="cursor-pointer">
                      <div className="font-medium">Monthly</div>
                      <div className="text-xs text-secondary">No commitment</div>
                    </Label>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-secondary">FREE</div>
                    <div className="text-xs text-muted-foreground">forever</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="yearly" id="standard-yearly" />
                    <Label htmlFor="standard-yearly" className="cursor-pointer">
                      <div className="font-medium">Yearly</div>
                      <div className="text-xs text-secondary">No commitment</div>
                    </Label>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-secondary">FREE</div>
                    <div className="text-xs text-muted-foreground">forever</div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Premium Plan */}
            <div
              className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedPlan === 'premium'
                  ? 'border-secondary bg-secondary/5'
                  : 'border-border hover:border-secondary/50'
              }`}
              onClick={() => setSelectedPlan('premium')}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary">
                  RECOMMENDED
                </Badge>
              </div>
              
              <div className="absolute top-4 right-4">
                {selectedPlan === 'premium' ? (
                  <CheckCircle className="w-6 h-6 text-secondary fill-secondary" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-border" />
                )}
              </div>

              <div className="mt-4 mb-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced features to grow your business
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>All Standard features</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Request-a-quote form with email notifications</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Customer reviews & testimonials</span>
                </li>
              </ul>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 mb-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-secondary">
                  <Check className="w-4 h-4" />
                  30-Day Free Trial
                </div>
              </div>

              <RadioGroup
                value={premiumBilling}
                onValueChange={(value) => setPremiumBilling(value as 'monthly' | 'yearly')}
                disabled={selectedPlan !== 'premium'}
              >
                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background mb-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="monthly" id="premium-monthly" />
                    <Label htmlFor="premium-monthly" className="cursor-pointer">
                      <div className="font-medium">Monthly</div>
                    </Label>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">£49</div>
                    <div className="text-xs text-muted-foreground">after trial</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="yearly" id="premium-yearly" />
                    <Label htmlFor="premium-yearly" className="cursor-pointer">
                      <div className="font-medium">Yearly</div>
                      <Badge variant="secondary" className="ml-2 text-xs bg-secondary/20 text-secondary hover:bg-secondary/20">
                        Get 2 months free!
                      </Badge>
                    </Label>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">£499</div>
                    <div className="text-xs text-muted-foreground">after trial</div>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-secondary hover:bg-secondary/90"
            >
              Submit Claim
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
