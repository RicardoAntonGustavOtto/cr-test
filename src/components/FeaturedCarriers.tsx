import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const carriers = [
  {
    name: "O2 WASTE SERVICES LIMITED",
    registration: "CBDU576461",
    expires: "2028-03-24",
    address: "170, ELM WALK",
    postcode: "SW20 9EG",
    phone: "07751668883",
    services: ["Household Waste", "Construction Waste", "+5"]
  },
  {
    name: "007 RECOVERY SERVICES LTD",
    registration: "CBDU551083",
    expires: "2027-09-10",
    address: "18, PLANETREES ROAD",
    postcode: "BD4 8AB",
    phone: "07824476870",
    services: []
  },
  {
    name: "Lee Collins trading as Lee Collins",
    registration: "CBDU443517",
    expires: "2028-06-30",
    address: "9, SPRINGFIELD GARDENS, PRESTWICH, MANCHESTER, M25 3ET",
    postcode: "M25 3ET",
    phone: "07800941552",
    services: ["Household Waste", "Garden Waste", "+8"]
  }
];

const FeaturedCarriers = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured Waste Carriers
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of licensed carriers from our directory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {carriers.map((carrier) => (
            <Card key={carrier.registration} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 min-h-[56px]">
                  {carrier.name}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registration:</span>
                    <span className="font-medium">{carrier.registration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expires:</span>
                    <span className="font-medium">{carrier.expires}</span>
                  </div>
                </div>

                <div className="text-sm mb-4">
                  <p className="text-muted-foreground">{carrier.address}</p>
                  <p className="font-medium">{carrier.postcode}</p>
                </div>

                {carrier.services.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {carrier.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={`tel:${carrier.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {carrier.phone}
                    </a>
                  </Button>
                </div>

                <Button
                  className="w-full mt-3 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link to={`/provider/${carrier.registration}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarriers;
