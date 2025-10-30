import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlyTippingRisks = () => {
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
              Risks of Using Unlicensed Carriers
            </h1>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-red-900 m-0 mb-2">
                    Warning: Serious Legal Consequences
                  </p>
                  <p className="text-red-800 m-0">
                    Using an unlicensed waste carrier can result in YOU being prosecuted and fined, even if you didn't know they were unlicensed.
                  </p>
                </div>
              </div>
            </div>

            <h2>What is Fly-Tipping?</h2>
            <p>
              Fly-tipping is the illegal dumping of waste on land that doesn't have a license to accept it. This includes dumping waste:
            </p>
            <ul>
              <li>On roadsides or in laybys</li>
              <li>In forests or countryside</li>
              <li>On private land without permission</li>
              <li>In rivers or water courses</li>
              <li>At unauthorized sites</li>
            </ul>

            <h2>The Connection to Unlicensed Carriers</h2>
            <p>
              When you hire an unlicensed waste carrier, there's a high risk they will fly-tip your waste because:
            </p>
            <ul>
              <li>They don't pay for proper disposal at licensed facilities</li>
              <li>They undercut legitimate carriers by avoiding disposal costs</li>
              <li>They have no accountability or regulatory oversight</li>
              <li>They often operate on a cash-only basis to avoid detection</li>
            </ul>

            <h2>Legal Consequences for YOU</h2>
            <p>
              Under the duty of care regulations, you can be held responsible if your waste is fly-tipped, even if you didn't do it yourself.
            </p>

            <h3>Householder Penalties</h3>
            <ul>
              <li><strong>Fixed Penalty Notice:</strong> £400 (reduced to £250 if paid within 10 days)</li>
              <li><strong>Court Prosecution:</strong> Fines up to £5,000</li>
              <li><strong>Criminal Record:</strong> For serious offenses</li>
              <li><strong>Legal Costs:</strong> You may have to pay prosecution costs</li>
            </ul>

            <h3>Business Penalties</h3>
            <ul>
              <li><strong>Unlimited Fines:</strong> In crown court</li>
              <li><strong>Imprisonment:</strong> Up to 5 years for serious cases</li>
              <li><strong>Clean-up Costs:</strong> You may be ordered to pay for waste removal</li>
              <li><strong>Reputation Damage:</strong> Public naming and shaming</li>
            </ul>

            <h2>Environmental Impact</h2>
            <p>
              Fly-tipping causes serious environmental harm:
            </p>
            <ul>
              <li><strong>Pollution:</strong> Chemicals and hazardous materials contaminate soil and water</li>
              <li><strong>Wildlife:</strong> Animals can be injured or killed by dumped waste</li>
              <li><strong>Public Health:</strong> Attracts vermin and creates health hazards</li>
              <li><strong>Community:</strong> Blights neighborhoods and reduces property values</li>
              <li><strong>Cleanup Costs:</strong> Taxpayers pay millions annually to clean up fly-tipping</li>
            </ul>

            <h2>How to Identify Unlicensed Carriers</h2>

            <h3>Warning Signs</h3>
            <ul>
              <li>Prices significantly lower than competitors</li>
              <li>Cash-only payments</li>
              <li>No business address or landline number</li>
              <li>Reluctant to provide waste transfer documentation</li>
              <li>Cannot show Environment Agency registration</li>
              <li>Vague about where waste will be taken</li>
              <li>No company markings on vehicle</li>
              <li>Operating from residential address</li>
            </ul>

            <h3>Red Flags in Advertising</h3>
            <ul>
              <li>"No questions asked" waste removal</li>
              <li>"Same day collection guaranteed"</li>
              <li>Advertising only through social media or flyers</li>
              <li>No website or professional online presence</li>
            </ul>

            <h2>Protecting Yourself</h2>

            <h3>Before Hiring a Waste Carrier</h3>
            <ol>
              <li><strong>Check Their License:</strong> Verify registration on the Environment Agency website</li>
              <li><strong>Get It in Writing:</strong> Obtain a quote with business details</li>
              <li><strong>Ask Questions:</strong> Where will the waste go? Which facility?</li>
              <li><strong>Get Documentation:</strong> Always get a waste transfer note or receipt</li>
              <li><strong>Keep Records:</strong> Save all paperwork for at least 2 years</li>
            </ol>

            <h3>What to Ask</h3>
            <ul>
              <li>"Can I see your waste carrier license?"</li>
              <li>"What's your registration number?"</li>
              <li>"Where will you take my waste?"</li>
              <li>"Can you provide a waste transfer note?"</li>
              <li>"Do you have public liability insurance?"</li>
            </ul>

            <h2>If You Suspect Fly-Tipping</h2>
            <p>
              If you see someone fly-tipping or suspect your waste has been illegally dumped:
            </p>
            <ul>
              <li>Report it to your local council immediately</li>
              <li>Call the Environment Agency incident hotline: 0800 80 70 60</li>
              <li>Note vehicle registration numbers if safe to do so</li>
              <li>Do not confront the person - it could be dangerous</li>
              <li>Take photos if possible (from a safe distance)</li>
            </ul>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Use Licensed Carriers Only</h3>
              <p className="mb-4">
                Protect yourself from prosecution and environmental damage by using only verified, licensed waste carriers.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/search-results">Find Licensed Carriers</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FlyTippingRisks;
