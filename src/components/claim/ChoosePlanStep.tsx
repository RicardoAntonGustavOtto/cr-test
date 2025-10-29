import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClaimFormData } from "@/pages/ClaimListing";
import { Check } from "lucide-react";

interface ChoosePlanStepProps {
  formData: ClaimFormData;
  updateFormData: (data: Partial<ClaimFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const plans = [
  {
    id: 'free',
    name: 'Free Listing',
    price: '£0',
    period: 'Forever',
    features: [
      'Basic business information',
      'Contact details display',
      'Service listing',
      'Areas served display',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '£29',
    period: 'per month',
    popular: true,
    features: [
      'Everything in Free',
      'Featured in search results',
      'Priority placement',
      'Photo gallery',
      'Customer reviews',
      'Detailed analytics',
      'Social media links',
      'Verified badge',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '£99',
    period: 'per month',
    features: [
      'Everything in Premium',
      'Top search placement',
      'Unlimited photos',
      'Custom branding',
      'API access',
      'Dedicated support',
      'Advanced analytics',
      'Multiple locations',
    ],
  },
];

export const ChoosePlanStep = ({
  formData,
  updateFormData,
  onNext,
  onBack,
}: ChoosePlanStepProps) => {
  const handleSelectPlan = (planId: string) => {
    updateFormData({ selectedPlan: planId });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Choose Your Plan</h2>
        <p className="text-muted-foreground">
          Select the plan that best fits your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${
              plan.popular ? 'border-secondary shadow-lg' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {plan.id === 'free' ? 'Start Free' : 'Get Started'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button 
          type="button" 
          variant="ghost"
          onClick={onBack}
        >
          Back
        </Button>
      </div>
    </div>
  );
};
