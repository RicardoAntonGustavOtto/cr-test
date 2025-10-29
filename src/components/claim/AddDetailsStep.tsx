import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClaimFormData } from "@/pages/ClaimListing";
import { Plus } from "lucide-react";

interface AddDetailsStepProps {
  formData: ClaimFormData;
  updateFormData: (data: Partial<ClaimFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const defaultServices = [
  'Household Waste',
  'Garden Waste',
  'Construction Waste',
  'Commercial Waste',
  'Hazardous Waste',
  'Electronic Waste',
  'Metal Waste',
  'Furniture Removal',
  'Skip Hire',
  'Recycling Services',
];

export const AddDetailsStep = ({
  formData,
  updateFormData,
  onNext,
  onBack,
}: AddDetailsStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    const services = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    updateFormData({ services });
  };

  const addCustomService = () => {
    if (formData.customService.trim() && !formData.services.includes(formData.customService.trim())) {
      updateFormData({
        services: [...formData.services, formData.customService.trim()],
        customService: '',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enhance Your Listing</CardTitle>
        <CardDescription>
          Add details to make your business stand out to potential customers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="website">Business Website</Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://your-website.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Business Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Tell customers about your waste removal services..."
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Services Offered</Label>
            <div className="flex flex-wrap gap-2 mb-3">
              {defaultServices.map((service) => (
                <Badge
                  key={service}
                  variant={formData.services.includes(service) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleService(service)}
                >
                  {service}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add custom service"
                value={formData.customService}
                onChange={(e) => updateFormData({ customService: e.target.value })}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomService())}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={addCustomService}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Select all services that apply or add custom ones
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="areasServed">Areas Served</Label>
            <Input
              id="areasServed"
              name="areasServed"
              placeholder="e.g. Manchester, Salford, Bolton (comma separated)"
              value={formData.areasServed}
              onChange={handleChange}
            />
            <p className="text-xs text-muted-foreground">
              Enter cities or regions separated by commas
            </p>
          </div>

          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={onBack}
            >
              Back
            </Button>
            <Button type="submit" className="flex-1 bg-secondary hover:bg-secondary/90">
              Continue
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
