import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarrierLicensing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </Button>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-[#1f502e] mb-6">
              Waste Carrier Licensing Explained
            </h1>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <p className="text-lg leading-relaxed m-0">
                In the UK, anyone who transports waste as part of their business must be registered as a waste carrier with the Environment Agency. This guide explains everything you need to know about waste carrier licensing.
              </p>
            </div>

            <h2>What is a Waste Carrier License?</h2>
            <p>
              A waste carrier license is a legal requirement for any business or individual who transports controlled waste in England and Wales. This includes:
            </p>
            <ul>
              <li>Commercial waste removal companies</li>
              <li>Skip hire businesses</li>
              <li>Construction companies removing waste from sites</li>
              <li>Scrap metal dealers</li>
              <li>Any business that transports waste as part of their operations</li>
            </ul>

            <h2>Types of Registration</h2>

            <h3>Upper Tier Registration</h3>
            <p>
              Required for businesses that regularly transport waste as their main business activity or as a significant part of their business. This registration:
            </p>
            <ul>
              <li>Costs £154 and lasts for 3 years</li>
              <li>Requires renewal every 3 years</li>
              <li>Involves checks on the business and key personnel</li>
              <li>May require evidence of professional competence</li>
            </ul>

            <h3>Lower Tier Registration</h3>
            <p>
              Suitable for businesses that only transport their own waste occasionally. This registration:
            </p>
            <ul>
              <li>Is free of charge</li>
              <li>Lasts indefinitely (no renewal required)</li>
              <li>Has simpler requirements</li>
              <li>Cannot be used for carrying waste as a commercial service</li>
            </ul>

            <h2>How to Register</h2>
            <p>
              Registration is done through the Environment Agency's online portal. You'll need:
            </p>
            <ul>
              <li>Your business details and company registration number</li>
              <li>Details of key personnel</li>
              <li>Information about the types of waste you'll carry</li>
              <li>Payment details (for upper tier registration)</li>
              <li>Evidence of professional competence (if required)</li>
            </ul>

            <h2>Penalties for Operating Without a License</h2>
            <p>
              Operating without proper registration is a criminal offense. Penalties can include:
            </p>
            <ul>
              <li>Unlimited fines</li>
              <li>Up to 5 years imprisonment</li>
              <li>Seizure of vehicles</li>
              <li>Damage to business reputation</li>
            </ul>

            <h2>Checking a Carrier's License</h2>
            <p>
              Before hiring a waste carrier, you should always verify their registration. You can:
            </p>
            <ul>
              <li>Use the Environment Agency's online public register</li>
              <li>Ask the carrier for their registration certificate</li>
              <li>Use our <Link to="/search-results" className="text-primary hover:underline">directory of approved carriers</Link></li>
            </ul>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Need to Verify a Waste Carrier?</h3>
              <p className="mb-4">
                Use our directory to find and verify Environment Agency approved waste carriers in your area.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/search-results">Search Directory</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarrierLicensing;
