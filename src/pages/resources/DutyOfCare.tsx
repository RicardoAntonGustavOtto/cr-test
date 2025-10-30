import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const DutyOfCare = () => {
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
              Your Duty of Care: Homeowners & Businesses
            </h1>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <p className="text-lg leading-relaxed m-0">
                Everyone has a legal responsibility to ensure their waste is handled correctly. This duty of care applies to both homeowners and businesses, and failure to comply can result in significant penalties.
              </p>
            </div>

            <h2>What is the Duty of Care?</h2>
            <p>
              The Environmental Protection Act 1990 places a legal duty of care on anyone who produces, imports, keeps, stores, transports, treats, or disposes of waste. This means you are responsible for your waste from the moment it's produced until it's finally disposed of or recovered.
            </p>

            <h2>Duty of Care for Homeowners</h2>
            <p>
              As a homeowner, you must:
            </p>
            <ul>
              <li>Only allow licensed waste carriers to remove your waste</li>
              <li>Check the waste carrier's license before hiring them</li>
              <li>Ask for proof of where your waste will be taken</li>
              <li>Keep records of who took your waste</li>
              <li>Ensure waste is properly contained and doesn't cause pollution</li>
            </ul>

            <h3>Common Household Waste Scenarios</h3>
            <p>
              <strong>Garden Waste:</strong> Can be taken to your local recycling center or collected by licensed carriers.
            </p>
            <p>
              <strong>Renovation Waste:</strong> Must be removed by a licensed waste carrier. Keep their details and ask for a waste transfer note.
            </p>
            <p>
              <strong>Bulky Items:</strong> Use your council's bulky waste collection service or hire a licensed carrier.
            </p>

            <h2>Duty of Care for Businesses</h2>
            <p>
              Businesses have stricter obligations under the duty of care. You must:
            </p>
            <ul>
              <li>Prevent unauthorized access to your waste</li>
              <li>Store waste safely and securely</li>
              <li>Use only registered waste carriers</li>
              <li>Complete waste transfer notes for every collection</li>
              <li>Keep records for at least 2 years</li>
              <li>Classify waste correctly</li>
              <li>Ensure waste is sent to authorized facilities</li>
            </ul>

            <h2>Waste Transfer Notes</h2>
            <p>
              For businesses, every time waste is transferred to a carrier, you must complete a waste transfer note. This must include:
            </p>
            <ul>
              <li>What the waste is and where it came from</li>
              <li>The type of container it's in</li>
              <li>The time and date of transfer</li>
              <li>The name and address of both parties</li>
              <li>The waste carrier registration number</li>
              <li>A description of the waste (using the correct classification code)</li>
            </ul>

            <h2>Penalties for Breaching Duty of Care</h2>
            <p>
              Failing to meet your duty of care obligations can result in:
            </p>
            <ul>
              <li><strong>Fixed Penalty Notice:</strong> £300 for householders</li>
              <li><strong>Court Fines:</strong> Up to £5,000 in magistrates' court</li>
              <li><strong>Unlimited Fines:</strong> In crown court for serious breaches</li>
              <li><strong>Criminal Record:</strong> For serious or repeated offenses</li>
            </ul>

            <h2>How to Comply</h2>

            <h3>For Homeowners</h3>
            <ol>
              <li>Always ask to see a waste carrier's license</li>
              <li>Get a receipt or waste transfer note</li>
              <li>Ask where your waste is going</li>
              <li>If in doubt, use your council's services</li>
              <li>Never use unlicensed 'man with a van' services</li>
            </ol>

            <h3>For Businesses</h3>
            <ol>
              <li>Set up a waste management system</li>
              <li>Train staff on waste handling procedures</li>
              <li>Maintain proper records and documentation</li>
              <li>Conduct regular audits of waste practices</li>
              <li>Build relationships with licensed waste carriers</li>
            </ol>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Find Licensed Waste Carriers</h3>
              <p className="mb-4">
                Meet your duty of care by using only Environment Agency approved waste carriers.
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

export default DutyOfCare;
