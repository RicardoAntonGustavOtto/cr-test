import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useWasteCarrierDetail } from "@/hooks/useWasteCarrierDetail";

const ProviderDetail = () => {
  const { registrationNumber } = useParams<{ registrationNumber: string }>();
  const { carrier, loading, error } = useWasteCarrierDetail(registrationNumber || '');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/search-results" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search Results
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error || !carrier ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                {error || 'Carrier not found'}
              </p>
              <Button asChild className="mt-4">
                <Link to="/search-results">Return to Directory</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{carrier.name}</CardTitle>
                    <Badge className="bg-secondary">
                      {carrier.tier} Tier
                    </Badge>
                  </div>
                  {carrier.expiryDate && (
                    <p className="text-sm text-muted-foreground">
                      Valid Registration until {new Date(carrier.expiryDate).toLocaleDateString('en-GB')}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Registration Number</p>
                    <p className="text-sm text-muted-foreground mt-1">{carrier.registrationNumber}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground mt-1">{carrier.address}</p>
                    {carrier.postcode && (
                      <p className="text-sm text-muted-foreground">{carrier.postcode}</p>
                    )}
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-foreground">Registration Type</p>
                    <p className="text-sm text-muted-foreground mt-1">{carrier.registrationType}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Registration Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Registration Number</p>
                      <p className="text-sm text-muted-foreground">{carrier.registrationNumber}</p>
                    </div>
                    {carrier.companyNumber && (
                      <div>
                        <p className="text-sm font-semibold text-foreground">Company Number</p>
                        <p className="text-sm text-muted-foreground">{carrier.companyNumber}</p>
                      </div>
                    )}
                    {carrier.registrationDate && (
                      <div>
                        <p className="text-sm font-semibold text-foreground">Registration Date</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(carrier.registrationDate).toLocaleDateString('en-GB')}
                        </p>
                      </div>
                    )}
                    {carrier.expiryDate && (
                      <div>
                        <p className="text-sm font-semibold text-foreground">Expiry Date</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(carrier.expiryDate).toLocaleDateString('en-GB')}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Valid Registration
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {carrier.phone && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={`tel:${carrier.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        {carrier.phone}
                      </a>
                    </Button>
                  )}
                  {carrier.email && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={`mailto:${carrier.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        {carrier.email}
                      </a>
                    </Button>
                  )}
                  {!carrier.phone && !carrier.email && (
                    <p className="text-sm text-muted-foreground">
                      No contact information available
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact this provider directly for a quote on your waste removal needs.
                  </p>
                  {carrier.phone ? (
                    <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
                      <a href={`tel:${carrier.phone}`}>Call Now</a>
                    </Button>
                  ) : (
                    <Button className="w-full bg-secondary hover:bg-secondary/90" disabled>
                      Contact Information Not Available
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProviderDetail;
