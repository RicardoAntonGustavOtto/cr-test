import { MapPin, FileText, CreditCard, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const popularLocations = [
  "Manchester",
  "London",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Liverpool",
];

export const SearchSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          UK's Approved Waste Carriers
        </h1>
        <p className="text-xl text-white/90 text-center mb-2">
          Find verified waste removal specialists and check licenses.
        </p>
        <p className="text-white/80 text-center mb-8">
          All providers are Environment Agency approved with valid certificates.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Tabs defaultValue="location" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="location" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Business Name
              </TabsTrigger>
              <TabsTrigger value="license" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                License No.
              </TabsTrigger>
            </TabsList>
            <TabsContent value="location">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter town, city, or postcode..."
                  className="flex-1"
                />
                <Button className="bg-secondary hover:bg-secondary/90">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="business">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter business name..."
                  className="flex-1"
                />
                <Button className="bg-secondary hover:bg-secondary/90">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="license">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter license number..."
                  className="flex-1"
                />
                <Button className="bg-secondary hover:bg-secondary/90">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/90 mb-3">Popular location searches:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularLocations.map((location) => (
              <button
                key={location}
                className="flex items-center gap-1 text-white hover:text-secondary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
