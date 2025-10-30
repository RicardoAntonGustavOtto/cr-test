import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const UsingDirectory = () => {
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
              Using the Approved Carrier Directory
            </h1>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Search className="h-6 w-6 text-[#1f502e] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg leading-relaxed m-0">
                    Our directory makes it easy to find Environment Agency approved waste carriers in your area. This guide explains how to search, what the information means, and how to choose the right carrier for your needs.
                  </p>
                </div>
              </div>
            </div>

            <h2>Why Use Our Directory?</h2>
            <p>
              The CertifiedRubbish directory provides several advantages over searching elsewhere:
            </p>
            <ul>
              <li><strong>Verified Listings:</strong> All carriers are confirmed to be Environment Agency registered</li>
              <li><strong>Up-to-Date Information:</strong> Regular synchronization with official registers</li>
              <li><strong>Easy Search:</strong> Find carriers by location, company name, or registration number</li>
              <li><strong>Detailed Information:</strong> See registration status, expiry dates, and business details</li>
              <li><strong>Direct Contact:</strong> Access to carrier contact information where available</li>
            </ul>

            <h2>How to Search the Directory</h2>

            <h3>Search by Location</h3>
            <p>
              The most common way to find carriers is by location:
            </p>
            <ol>
              <li>Go to the <Link to="/search-results" className="text-primary hover:underline">Directory page</Link></li>
              <li>Enter your postcode, town, or county in the search box</li>
              <li>Browse the results to find carriers operating in your area</li>
              <li>Click on a carrier to view full details</li>
            </ol>

            <h3>Search by Company Name</h3>
            <p>
              If you know the company name or want to verify a specific carrier:
            </p>
            <ol>
              <li>Use the search box to enter the company name</li>
              <li>Results will show all matching carriers</li>
              <li>Look for exact matches or similar names</li>
            </ol>

            <h3>Search by Registration Number</h3>
            <p>
              To verify a carrier who has provided their registration number:
            </p>
            <ol>
              <li>Enter the registration number in the search box</li>
              <li>View the full details to confirm it matches their information</li>
              <li>Check the registration is current and not expired</li>
            </ol>

            <h2>Understanding Carrier Listings</h2>

            <h3>Registration Status</h3>
            <p>
              Each listing shows the carrier's current status:
            </p>
            <ul>
              <li><strong>Active:</strong> Currently registered and authorized to operate</li>
              <li><strong>Expired:</strong> Registration has lapsed - DO NOT USE</li>
              <li><strong>Suspended:</strong> Registration temporarily suspended - DO NOT USE</li>
              <li><strong>Revoked:</strong> Registration canceled by the Environment Agency - DO NOT USE</li>
            </ul>

            <h3>Registration Details</h3>
            <p>
              Carrier listings include:
            </p>
            <ul>
              <li><strong>Registration Number:</strong> Unique identifier (usually starts with CBDU or CBDL)</li>
              <li><strong>Company Name:</strong> Official registered business name</li>
              <li><strong>Trading Name:</strong> Name the business operates under (if different)</li>
              <li><strong>Registration Type:</strong> Upper tier (commercial) or lower tier (own waste only)</li>
              <li><strong>Expiry Date:</strong> When the registration expires</li>
              <li><strong>Business Address:</strong> Registered office location</li>
            </ul>

            <h3>Registration Types Explained</h3>

            <h4>Upper Tier Carriers</h4>
            <p>
              These carriers can transport waste commercially:
            </p>
            <ul>
              <li>Authorized to collect waste from others</li>
              <li>Pay a registration fee (£154 for 3 years)</li>
              <li>Subject to checks and conditions</li>
              <li>Must demonstrate professional competence</li>
              <li>Suitable for hiring waste collection services</li>
            </ul>

            <h4>Lower Tier Carriers</h4>
            <p>
              These carriers can only transport their own waste:
            </p>
            <ul>
              <li>Free registration that doesn't expire</li>
              <li>Cannot offer waste collection services commercially</li>
              <li>Limited to moving their own business waste</li>
              <li><strong>NOT suitable for hiring waste collection</strong></li>
            </ul>

            <h2>Choosing the Right Carrier</h2>

            <h3>What to Look For</h3>
            <p>
              When selecting a carrier from the directory:
            </p>
            <ol>
              <li><strong>Check Status:</strong> Must be "Active"</li>
              <li><strong>Verify Type:</strong> Must be "Upper Tier" for commercial collections</li>
              <li><strong>Check Expiry:</strong> Should have significant time before expiry</li>
              <li><strong>Location:</strong> Operates in or near your area</li>
              <li><strong>Business Details:</strong> Professional listing with complete information</li>
            </ol>

            <h3>Additional Research</h3>
            <p>
              Beyond the directory, also consider:
            </p>
            <ul>
              <li><strong>Online Reviews:</strong> Check Google, Trustpilot, or other review sites</li>
              <li><strong>Website:</strong> Professional carriers usually have a website</li>
              <li><strong>Insurance:</strong> Ask about public liability and waste carriers insurance</li>
              <li><strong>Experience:</strong> How long they've been operating</li>
              <li><strong>Specialization:</strong> Some carriers specialize in certain waste types</li>
              <li><strong>Accreditations:</strong> Membership of trade bodies or additional certifications</li>
            </ul>

            <h2>Before You Hire</h2>

            <h3>Initial Contact</h3>
            <p>
              When you contact a carrier from the directory:
            </p>
            <ul>
              <li>Confirm their registration number matches the directory</li>
              <li>Describe your waste clearly and honestly</li>
              <li>Ask where they'll take the waste</li>
              <li>Request a written quote</li>
              <li>Ask about documentation they'll provide</li>
            </ul>

            <h3>Getting Quotes</h3>
            <p>
              For the best results:
            </p>
            <ul>
              <li>Contact at least 3 carriers for quotes</li>
              <li>Provide the same information to each for fair comparison</li>
              <li>Get quotes in writing</li>
              <li>Ask about any additional charges</li>
              <li>Don't automatically choose the cheapest</li>
            </ul>

            <h3>Questions to Ask</h3>
            <ul>
              <li>"Can you confirm your Environment Agency registration number?"</li>
              <li>"What specific services do you offer?"</li>
              <li>"Where will you dispose of the waste?"</li>
              <li>"What documentation will you provide?"</li>
              <li>"Do you have public liability insurance?"</li>
              <li>"What happens if you can't collect on the agreed date?"</li>
              <li>"Are there any items you cannot take?"</li>
            </ul>

            <h2>After Collection</h2>

            <h3>Required Documentation</h3>
            <p>
              Always obtain and keep:
            </p>
            <ul>
              <li><strong>Waste Transfer Note:</strong> For business waste (legal requirement)</li>
              <li><strong>Receipt:</strong> For household waste (proof of collection)</li>
              <li><strong>Contact Details:</strong> Carrier's name, address, and registration number</li>
            </ul>

            <h3>Keep Records</h3>
            <p>
              Store documentation for:
            </p>
            <ul>
              <li><strong>Households:</strong> At least 2 years (recommended)</li>
              <li><strong>Businesses:</strong> Minimum 2 years (legal requirement)</li>
            </ul>
            <p>
              This protects you if your waste is later found to be fly-tipped.
            </p>

            <h2>Reporting Problems</h2>

            <h3>If Something Goes Wrong</h3>
            <p>
              If you experience issues with a listed carrier:
            </p>
            <ul>
              <li><strong>Poor Service:</strong> Leave honest reviews to help others</li>
              <li><strong>Suspected Fly-Tipping:</strong> Report to Environment Agency (0800 80 70 60)</li>
              <li><strong>Operating Without Valid Registration:</strong> Report to Environment Agency</li>
              <li><strong>Fraud:</strong> Report to Action Fraud and your local police</li>
            </ul>

            <h2>Directory Limitations</h2>

            <h3>What the Directory Can't Tell You</h3>
            <p>
              The directory provides official registration data, but cannot guarantee:
            </p>
            <ul>
              <li>Quality of service</li>
              <li>Pricing competitiveness</li>
              <li>Customer satisfaction</li>
              <li>Availability in specific postcodes</li>
              <li>Specialist capabilities</li>
            </ul>
            <p>
              <em>You should still do your own research and due diligence before hiring.</em>
            </p>

            <h2>Keeping Safe Online</h2>

            <h3>Avoiding Scams</h3>
            <ul>
              <li>Always verify carrier details on our directory</li>
              <li>Be wary of pressure to pay upfront</li>
              <li>Don't pay cash without proper receipts</li>
              <li>Avoid carriers who won't provide registration numbers</li>
              <li>Never share financial details until you've verified the carrier</li>
            </ul>

            <h2>Mobile Access</h2>
            <p>
              Our directory is fully mobile-responsive, allowing you to:
            </p>
            <ul>
              <li>Search on the go</li>
              <li>Verify a carrier at your location</li>
              <li>Contact carriers directly from your phone</li>
              <li>Save listings for later reference</li>
            </ul>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Ready to Find a Licensed Carrier?</h3>
              <p className="mb-4">
                Search our directory now to find Environment Agency approved waste carriers in your area.
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

export default UsingDirectory;
