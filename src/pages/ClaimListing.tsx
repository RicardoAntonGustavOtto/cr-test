import { useParams, useNavigate } from "react-router-dom";
import { useWasteCarrierDetail } from "@/hooks/useWasteCarrierDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Building2, MapPin, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ClaimListing = () => {
  const { registrationNumber } = useParams();
  const navigate = useNavigate();
  const { carrier, loading } = useWasteCarrierDetail(registrationNumber || '');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessRole: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement claim submission logic
    toast({
      title: "Claim Request Submitted",
      description: "We'll review your request and get back to you within 2 business days.",
    });
    console.log('Claim submission:', { registrationNumber, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
      
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Claim Your Business Listing
            </h1>
            <p className="text-muted-foreground">
              Verify ownership and take control of your business profile
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Business Information */}
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

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    Why Claim?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                      <span>Update business information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                      <span>Add photos and services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                      <span>Respond to customer inquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                      <span>Get verified badge</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Claim Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Claim Request Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to start the verification process. We'll need to verify your ownership of this business.
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
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please provide any additional information that would help verify your ownership..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-sm mb-2">Verification Process:</h3>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                        <li>Submit this form with your business details</li>
                        <li>We'll send a verification email to the address provided</li>
                        <li>You may need to provide additional documentation</li>
                        <li>Once verified, you'll receive full access to manage your listing</li>
                      </ol>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1 bg-secondary hover:bg-secondary/90">
                        Submit Claim Request
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClaimListing;
