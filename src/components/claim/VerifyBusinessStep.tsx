import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, FileText } from "lucide-react";
import { ClaimFormData } from "@/pages/ClaimListing";
import { WasteCarrierDetail } from "@/hooks/useWasteCarrierDetail";

interface VerifyBusinessStepProps {
  carrier: WasteCarrierDetail;
  formData: ClaimFormData;
  updateFormData: (data: Partial<ClaimFormData>) => void;
  onNext: () => void;
  onCancel: () => void;
}

export const VerifyBusinessStep = ({
  carrier,
  formData,
  updateFormData,
  onNext,
  onCancel,
}: VerifyBusinessStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Business Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-start gap-2 mb-2">
                <Building2 className="w-4 h-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Business Name</p>
                  <p className="text-foreground">{carrier.name}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <FileText className="w-4 h-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Registration</p>
                  <p className="text-foreground">{carrier.registrationNumber}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Address</p>
                  <p className="text-foreground text-sm">{carrier.address}</p>
                  {carrier.postcode && (
                    <p className="text-foreground text-sm">{carrier.postcode}</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Verify Business Ownership</CardTitle>
            <CardDescription>
              Confirm your identity and ownership of this business listing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Business Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@businessemail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Please use your official business email address for verification
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessRole">Your Role in the Business *</Label>
                <Input
                  id="businessRole"
                  name="businessRole"
                  placeholder="e.g., Owner, Director, Manager"
                  value={formData.businessRole}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Create Password *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
                <p className="text-xs text-muted-foreground">
                  Must be at least 6 characters long
                </p>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-secondary hover:bg-secondary/90">
                  Continue
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
