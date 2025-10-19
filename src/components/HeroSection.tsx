import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Building2, FileText, Search } from "lucide-react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"location" | "business" | "license">("location");
  
  const popularLocations = [
    "Manchester",
    "London",
    "Birmingham",
    "Leeds",
    "Glasgow",
    "Liverpool"
  ];

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            UK's Approved Waste Carriers
          </h1>
          <p className="text-lg md:text-xl mb-2">
            Find verified waste removal specialists and check licenses.
          </p>
          <p className="text-base md:text-lg opacity-90">
            All providers are Environment Agency approved with valid certificates.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab("location")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "location"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Location</span>
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "business"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">Business Name</span>
              </button>
              <button
                onClick={() => setActiveTab("license")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "license"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">License No.</span>
              </button>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Enter town, city, or postcode..."
                  className="pl-10 h-12"
                />
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 h-12 px-6">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-primary-foreground/80 mb-3">
              Popular location searches:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularLocations.map((location) => (
                <button
                  key={location}
                  className="flex items-center gap-1 text-primary-foreground hover:text-secondary transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
