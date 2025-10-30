import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const AvoidingFlyTipping = () => {
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
              How to Avoid Illegal Waste Dumping
            </h1>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-green-900 m-0 mb-2">
                    Protect Yourself and the Environment
                  </p>
                  <p className="text-green-800 m-0">
                    Following these simple steps will help you dispose of waste responsibly and avoid becoming a victim of fly-tipping.
                  </p>
                </div>
              </div>
            </div>

            <h2>Understanding Your Responsibility</h2>
            <p>
              Under the Environmental Protection Act 1990, you have a legal "duty of care" for any waste you produce. This means you're responsible for ensuring it's disposed of properly, even if you hire someone else to take it away.
            </p>
            <p>
              If your waste is fly-tipped, you can be prosecuted and fined, even if you didn't dump it yourself.
            </p>

            <h2>Choose the Right Disposal Method</h2>

            <h3>For Small Amounts of Household Waste</h3>
            <ul>
              <li><strong>Regular Bin Collection:</strong> Use your council's weekly collections</li>
              <li><strong>Recycling Centers:</strong> Free for household waste at local tips</li>
              <li><strong>Council Bulky Waste:</strong> For large items, book official council collection</li>
            </ul>

            <h3>For Larger Amounts or Business Waste</h3>
            <ul>
              <li><strong>Licensed Waste Carriers:</strong> Always use Environment Agency registered carriers</li>
              <li><strong>Skip Hire:</strong> Ensure the company is licensed</li>
              <li><strong>Waste Management Companies:</strong> Verify credentials before hiring</li>
            </ul>

            <h2>Vetting a Waste Carrier: Essential Checks</h2>

            <h3>1. Verify Their License</h3>
            <p>
              <strong>Every legitimate waste carrier must be registered with the Environment Agency.</strong>
            </p>
            <ul>
              <li>Ask for their registration number</li>
              <li>Check it on the Environment Agency public register</li>
              <li>Use our verified directory to find approved carriers</li>
              <li>Ask to see their registration certificate</li>
            </ul>

            <h3>2. Get It in Writing</h3>
            <p>
              Always obtain:
            </p>
            <ul>
              <li>A written quote on company letterhead</li>
              <li>Full business name and address</li>
              <li>Contact telephone number (landline, not just mobile)</li>
              <li>Company registration number</li>
              <li>VAT number (if applicable)</li>
            </ul>

            <h3>3. Ask Key Questions</h3>
            <p>
              A legitimate carrier will happily answer:
            </p>
            <ul>
              <li>"What's your Environment Agency registration number?"</li>
              <li>"Where exactly will you take my waste?"</li>
              <li>"What's the name and address of the disposal facility?"</li>
              <li>"Can you provide a waste transfer note?"</li>
              <li>"Do you have public liability insurance?"</li>
              <li>"Can I have a receipt with your company details?"</li>
            </ul>

            <h3>4. Get Proper Documentation</h3>
            <p>
              <strong>Always obtain a waste transfer note or receipt that includes:</strong>
            </p>
            <ul>
              <li>Date of collection</li>
              <li>Description of the waste</li>
              <li>Carrier's name, address, and registration number</li>
              <li>Where the waste is being taken</li>
              <li>Signature of the carrier</li>
            </ul>
            <p>
              <strong>Keep this document for at least 2 years.</strong>
            </p>

            <h2>Warning Signs of Unlicensed Carriers</h2>

            <h3>Red Flags - Avoid These Operators</h3>
            <ul>
              <li>Prices significantly below market rate</li>
              <li>Cash-only, no receipts offered</li>
              <li>No business address or just a mobile number</li>
              <li>Unmarked vehicle or van</li>
              <li>Reluctant to provide registration details</li>
              <li>Cannot or won't say where waste is going</li>
              <li>Vague about documentation</li>
              <li>"No questions asked" approach</li>
              <li>Advertising only through social media or handwritten flyers</li>
              <li>Pressure to pay upfront before collection</li>
            </ul>

            <h3>Too Good to Be True?</h3>
            <p>
              If a price seems suspiciously low, there's usually a reason. Legitimate waste disposal has unavoidable costs:
            </p>
            <ul>
              <li>Landfill or processing fees</li>
              <li>Vehicle costs and fuel</li>
              <li>Insurance and licensing</li>
              <li>Staff wages</li>
              <li>Business overheads</li>
            </ul>
            <p>
              Carriers who undercut legitimate businesses are likely cutting corners - usually by fly-tipping.
            </p>

            <h2>Best Practices for Waste Disposal</h2>

            <h3>For Homeowners</h3>
            <ol>
              <li><strong>Plan Ahead:</strong> Don't wait until you're desperate to clear waste</li>
              <li><strong>Research First:</strong> Find reputable carriers before you need them</li>
              <li><strong>Compare Quotes:</strong> Get multiple quotes from licensed carriers</li>
              <li><strong>Check Reviews:</strong> Look for online reviews and testimonials</li>
              <li><strong>Ask Neighbors:</strong> Get recommendations from people who've used them</li>
              <li><strong>Keep Records:</strong> Save all documentation</li>
            </ol>

            <h3>For Businesses</h3>
            <ol>
              <li><strong>Establish Relationships:</strong> Build ongoing relationships with verified carriers</li>
              <li><strong>Contract Terms:</strong> Use written contracts for regular collections</li>
              <li><strong>Audit Trail:</strong> Maintain complete records of all waste transfers</li>
              <li><strong>Staff Training:</strong> Train staff on duty of care requirements</li>
              <li><strong>Regular Reviews:</strong> Periodically verify carrier credentials</li>
              <li><strong>Segregate Waste:</strong> Separate different waste types correctly</li>
            </ol>

            <h2>Alternative Disposal Options</h2>

            <h3>Reuse and Donate</h3>
            <p>
              Before disposing, consider if items can be reused:
            </p>
            <ul>
              <li><strong>Charity Shops:</strong> For furniture, clothing, and household items</li>
              <li><strong>Freecycle/Freegle:</strong> Online platforms for giving away unwanted items</li>
              <li><strong>Facebook Marketplace:</strong> Sell or give away usable items</li>
              <li><strong>Community Groups:</strong> Local groups often want materials for projects</li>
            </ul>

            <h3>Council Services</h3>
            <ul>
              <li><strong>Household Waste Recycling Centers:</strong> Free for residents</li>
              <li><strong>Bulky Waste Collection:</strong> Official service (usually small fee)</li>
              <li><strong>Special Collections:</strong> For hazardous or unusual items</li>
            </ul>

            <h2>If You Become a Victim</h2>

            <h3>Your Waste Has Been Fly-Tipped</h3>
            <p>
              If you discover your waste has been illegally dumped:
            </p>
            <ol>
              <li><strong>Report It:</strong> Contact your local council and the Environment Agency (0800 80 70 60)</li>
              <li><strong>Provide Evidence:</strong> Show your waste transfer note and any other documentation</li>
              <li><strong>Cooperate:</strong> Help authorities identify the perpetrator</li>
              <li><strong>Keep Records:</strong> Document everything related to the incident</li>
            </ol>
            <p>
              <strong>Important:</strong> If you have proper documentation showing you hired a registered carrier, you're less likely to be prosecuted.
            </p>

            <h3>Reporting Fly-Tipping</h3>
            <p>
              If you witness fly-tipping:
            </p>
            <ul>
              <li>Report to your local council online or by phone</li>
              <li>Call Environment Agency: 0800 80 70 60</li>
              <li>Note vehicle registration if safe to do so</li>
              <li>Don't confront fly-tippers - could be dangerous</li>
              <li>Take photos from a safe distance if possible</li>
            </ul>

            <h2>The Cost of Doing It Right</h2>

            <h3>Typical Costs for Licensed Carriers</h3>
            <p>
              Legitimate waste removal typically costs:
            </p>
            <ul>
              <li><strong>Single item removal:</strong> £30-£80</li>
              <li><strong>Van load:</strong> £100-£200</li>
              <li><strong>Skip hire (6-8 yard):</strong> £150-£300</li>
              <li><strong>Commercial waste:</strong> Varies by volume and type</li>
            </ul>
            <p>
              <em>Prices vary by region and waste type. The cost is worth it to ensure legal, environmentally responsible disposal.</em>
            </p>

            <h2>Environmental Impact of Proper Disposal</h2>
            <p>
              Using licensed carriers helps:
            </p>
            <ul>
              <li>Prevent pollution of land, water, and air</li>
              <li>Protect wildlife and ecosystems</li>
              <li>Increase recycling and reduce landfill</li>
              <li>Keep communities clean and safe</li>
              <li>Support legitimate businesses</li>
              <li>Reduce the burden on taxpayers who fund cleanup</li>
            </ul>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Find Verified, Licensed Waste Carriers</h3>
              <p className="mb-4">
                Search our directory of Environment Agency approved carriers who you can trust to dispose of your waste legally and responsibly.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/search-results">Search Directory Now</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AvoidingFlyTipping;
