import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  "Household Waste",
  "Garden Waste",
  "Construction Waste",
  "Commercial Waste",
  "Hazardous Waste",
];

const sampleCarriers = [
  {
    name: "O2 WASTE SERVICES LIMITED",
    registration: "CBDU288349",
    location: "London",
    services: ["Household Waste", "Commercial Waste"],
  },
  {
    name: "007 RECOVERY SERVICES LTD",
    registration: "CBDU367891",
    location: "Manchester",
    services: ["Household Waste", "Garden Waste", "Construction Waste"],
  },
  {
    name: "Lee Collins trading as Lee Collins Man & Van",
    registration: "CBDU12345",
    location: "Birmingham",
    services: ["Household Waste", "Garden Waste"],
  },
];

export const DirectorySection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            UK Licensed Rubbish Removal Directory
          </h2>
          <p className="text-white/90">
            Verify if your rubbish removal provider is officially registered
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Select defaultValue="all">
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="household">Household Waste</SelectItem>
                <SelectItem value="garden">Garden Waste</SelectItem>
                <SelectItem value="construction">Construction Waste</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Search by name, registration or location"
                className="flex-1"
              />
              <Button className="bg-secondary hover:bg-secondary/90">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <div className="border-t pt-4">
            <Label className="text-foreground font-semibold mb-3 block">
              Filter by Services:
            </Label>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox id={service} />
                  <label
                    htmlFor={service}
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {sampleCarriers.map((carrier, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{carrier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Registration: {carrier.registration}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Location: {carrier.location}
                    </p>
                  </div>
                  <Badge className="bg-secondary">Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {carrier.services.map((service) => (
                    <Badge key={service} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/90 mb-4">
            Showing 3 of 1,234 registered carriers
          </p>
          <Button variant="outline" className="bg-white">
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};
