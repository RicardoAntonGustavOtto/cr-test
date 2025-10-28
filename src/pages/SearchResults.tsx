import Header from "@/components/Header";
import { QuoteForm } from "@/components/QuoteForm";
import { DirectorySection } from "@/components/DirectorySection";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchResults = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nationwide Rubbish Removal & Waste Clearance
              </h1>
              <p className="text-xl text-secondary font-semibold mb-6">
                Get quotes from approved waste carriers near you
              </p>
              <p className="text-foreground mb-6">
                Need rubbish, junk, or bulky waste collected? We connect you instantly
                with Environment Agency approved contractors across the UK. No hassle, no
                risk - just fast, legal, and reliable waste removal.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Same-day and next-day rubbish removal service",
                  "No fly-tipping risk: only licensed, insured waste carriers",
                  "Household, garden, and office clearance",
                  "Eco-friendly disposal and recycling",
                  "Contractors contact you directly with quotes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted border-l-4 border-secondary p-4 rounded">
                <p className="text-foreground">
                  Your request goes straight to fully vetted, Environment Agency
                  registered waste carriers. They'll be in touch directly-no middlemen,
                  no hidden fees.
                </p>
              </div>

              <Button 
                className="mt-6 bg-primary hover:bg-primary/90"
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
