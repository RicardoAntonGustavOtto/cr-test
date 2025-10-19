import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Armchair, Car, Truck, TruckIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const wasteAmounts = [
  { id: "single", label: "Single", subtitle: "One item", icon: Armchair },
  { id: "small", label: "Small", subtitle: "Car load", icon: Car },
  { id: "medium", label: "Medium", subtitle: "Small van", icon: Truck },
  { id: "large", label: "Large", subtitle: "Large van", icon: TruckIcon },
];

export const QuoteForm = () => {
  const [selectedAmount, setSelectedAmount] = useState("single");

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="bg-primary text-white text-center py-4 -mx-6 -mt-6 mb-6 rounded-t-lg">
        <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
      </div>

      <form className="space-y-4">
        <div>
          <Label className="text-foreground mb-3 block">
            How much rubbish do you have?
          </Label>
          <div className="grid grid-cols-4 gap-2">
            {wasteAmounts.map((amount) => {
              const Icon = amount.icon;
              return (
                <button
                  key={amount.id}
                  type="button"
                  onClick={() => setSelectedAmount(amount.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-colors ${
                    selectedAmount === amount.id
                      ? "border-secondary bg-secondary/10"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <Icon className="w-8 h-8 mb-1 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {amount.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {amount.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="text-foreground">
            Description of waste *
          </Label>
          <Textarea
            id="description"
            placeholder="Describe what you need removed (e.g. old sofa, garden waste, etc.)"
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="photo" className="text-foreground">
            Upload a photo *
          </Label>
          <div className="mt-1 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-secondary/50 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Upload</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date" className="text-foreground">
              Preferred date *
            </Label>
            <Select>
              <SelectTrigger id="date" className="mt-1">
                <SelectValue placeholder="Select a date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Sun, Oct 19</SelectItem>
                <SelectItem value="tomorrow">Mon, Oct 20</SelectItem>
                <SelectItem value="day3">Tue, Oct 21</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="time" className="text-foreground">
              Time
            </Label>
            <Select>
              <SelectTrigger id="time" className="mt-1">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="7-8">7:00 - 8:00</SelectItem>
                <SelectItem value="8-9">8:00 - 9:00</SelectItem>
                <SelectItem value="9-10">9:00 - 10:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-foreground">
              Name *
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@email.com"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="postcode" className="text-foreground">
              Postcode *
            </Label>
            <Input
              id="postcode"
              placeholder="e.g. SW1A 1AA"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-foreground">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              className="mt-1"
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
          Get My Free Quote →
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting, you agree to be contacted directly by Environment Agency
          approved waste carriers.
        </p>
      </form>
    </div>
  );
};
