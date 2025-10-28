import Header from "@/components/Header";
import { QuoteForm } from "@/components/QuoteForm";
import { DirectorySection } from "@/components/DirectorySection";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchResults = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Rubbish Removal & Waste Clearance in London
              </h1>
              <p className="text-xl text-secondary font-semibold">
                Get quotes from approved waste carriers in London
              </p>
              <p className="text-foreground leading-relaxed">
                We connect you instantly with Environment Agency approved contractors in your area. No hassle, no risk—just fast, legal, and reliable waste removal.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Same-day and next-day rubbish removal in London",
                  "No fly-tipping risk: only licensed, insured waste carriers",
                  "Household, garden, and office clearance",
                  "Eco-friendly disposal and recycling",
                  "Contractors contact you directly with quotes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/50 border-l-4 border-primary p-5 rounded">
                <p className="text-foreground text-sm leading-relaxed">
                  Your request goes straight to fully vetted, Environment Agency registered waste carriers. They'll be in touch directly—no middlemen, no hidden fees.
                </p>
              </div>

              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base"
                onClick={() => {
                  document.getElementById('directory-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Browse Directory
              </Button>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <DirectorySection />
    </div>
  );
};

export default SearchResults;
