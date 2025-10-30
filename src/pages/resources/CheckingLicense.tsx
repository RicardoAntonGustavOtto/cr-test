import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CheckingLicense = () => {
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
              How to Check a Waste Carrier's License
            </h1>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#1f502e] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg leading-relaxed m-0">
                    Before hiring any waste carrier, you must verify they're properly licensed. This simple check protects you from prosecution and environmental damage. Here's exactly how to do it.
                  </p>
                </div>
              </div>
            </div>

            <h2>Why You Must Check Licenses</h2>
            <p>
              Checking a waste carrier's license is not optional - it's a legal requirement under your duty of care. If you use an unlicensed carrier:
            </p>
            <ul>
              <li>You can be prosecuted and fined</li>
              <li>Your waste may be fly-tipped</li>
              <li>You remain responsible even though you hired someone else</li>
              <li>You could face unlimited fines or even imprisonment</li>
            </ul>

            <h2>What is a Waste Carrier License?</h2>

            <h3>Registration Requirements</h3>
            <p>
              In England and Wales, anyone who transports waste must register with the Environment Agency as a waste carrier. Scotland and Northern Ireland have separate systems.
            </p>

            <h3>Types of Registration</h3>
            <ul>
              <li>
                <strong>Upper Tier:</strong> For businesses that transport waste commercially (what you need to hire)
              </li>
              <li>
                <strong>Lower Tier:</strong> For businesses that only transport their own waste (cannot be hired)
              </li>
            </ul>

            <h2>Method 1: Use Our Directory (Easiest)</h2>

            <h3>Quick Verification</h3>
            <p>
              The fastest way to check a carrier is through our directory:
            </p>
            <ol>
              <li>Go to our <Link to="/search-results" className="text-primary hover:underline">Carrier Directory</Link></li>
              <li>Search by company name or registration number</li>
              <li>View their status - must show "Active"</li>
              <li>Check registration type - must be "Upper Tier"</li>
              <li>Verify expiry date - should have time remaining</li>
            </ol>

            <h3>What You'll See</h3>
            <p>
              Our directory shows:
            </p>
            <ul>
              <li>Current registration status (Active/Expired/Suspended/Revoked)</li>
              <li>Registration number</li>
              <li>Registration type (Upper/Lower tier)</li>
              <li>Expiry date</li>
              <li>Business name and address</li>
              <li>Company information</li>
            </ul>

            <h2>Method 2: Environment Agency Public Register</h2>

            <h3>Official Government Check</h3>
            <p>
              You can check directly with the Environment Agency:
            </p>
            <ol>
              <li>Visit the Environment Agency website</li>
              <li>Navigate to "Public register of waste carriers"</li>
              <li>Search by company name or registration number</li>
              <li>Review the results carefully</li>
            </ol>

            <h3>Understanding Results</h3>
            <p>
              The public register shows:
            </p>
            <ul>
              <li><strong>Registration number:</strong> Usually starts with CBDU (upper) or CBDL (lower)</li>
              <li><strong>Name and address:</strong> As registered</li>
              <li><strong>Registration date:</strong> When they first registered</li>
              <li><strong>Expiry date:</strong> Upper tier expires after 3 years</li>
              <li><strong>Status:</strong> Whether currently valid</li>
            </ul>

            <h2>What to Ask the Carrier</h2>

            <h3>Essential Questions</h3>
            <p>
              Before hiring, always ask:
            </p>
            <ul>
              <li>"What's your Environment Agency waste carrier registration number?"</li>
              <li>"Can I see your registration certificate?"</li>
              <li>"When does your registration expire?"</li>
              <li>"Are you upper tier or lower tier registered?"</li>
            </ul>

            <h3>Red Flags</h3>
            <p>
              Be concerned if they:
            </p>
            <ul>
              <li>Can't provide a registration number</li>
              <li>Claim they "don't need one"</li>
              <li>Say it's "in process" or "pending"</li>
              <li>Become evasive or defensive</li>
              <li>Provide a number you can't verify</li>
              <li>Show only a lower tier registration</li>
            </ul>

            <h2>Verifying the Registration Certificate</h2>

            <h3>What It Should Look Like</h3>
            <p>
              A genuine Environment Agency registration certificate includes:
            </p>
            <ul>
              <li>Environment Agency branding and logo</li>
              <li>Unique registration number</li>
              <li>Registered business name and address</li>
              <li>Type of registration (upper or lower tier)</li>
              <li>Expiry date (for upper tier)</li>
              <li>Activities covered by the registration</li>
            </ul>

            <h3>Checking Authenticity</h3>
            <ol>
              <li>Check the registration number matches official records</li>
              <li>Verify the business name matches what they told you</li>
              <li>Ensure the expiry date hasn't passed</li>
              <li>Confirm it's upper tier if hiring them</li>
              <li>Take a photo of the certificate for your records</li>
            </ol>

            <h2>Common Excuses and How to Respond</h2>

            <h3>"I'm registered but don't have the number handy"</h3>
            <p>
              <strong>Response:</strong> "Please find it and call me back. I need to verify it before we proceed."
            </p>

            <h3>"I'm too small to need registration"</h3>
            <p>
              <strong>Response:</strong> "Everyone who transports waste commercially needs to be registered, regardless of business size."
            </p>

            <h3>"I'm exempt because I only do household waste"</h3>
            <p>
              <strong>Response:</strong> "There's no exemption for household waste carriers. You still need upper tier registration."
            </p>

            <h3>"You can trust me, I've been doing this for years"</h3>
            <p>
              <strong>Response:</strong> "I'm sure you're trustworthy, but I have a legal duty to verify your registration. It protects both of us."
            </p>

            <h2>Special Cases</h2>

            <h3>Charities and Community Groups</h3>
            <p>
              Even charities need to be registered if they transport waste. Don't assume they're exempt - always check.
            </p>

            <h3>Council Services</h3>
            <p>
              Local councils are usually exempt from registration requirements when collecting waste in their area. However, contractors working for councils still need registration.
            </p>

            <h3>Scrap Metal Dealers</h3>
            <p>
              Scrap metal dealers need both:
            </p>
            <ul>
              <li>Waste carrier registration (for collecting scrap)</li>
              <li>Scrap metal dealer license (for buying/selling scrap)</li>
            </ul>

            <h2>What to Do If Registration is Invalid</h2>

            <h3>Expired Registration</h3>
            <p>
              If a carrier's registration has expired:
            </p>
            <ul>
              <li><strong>DO NOT use them</strong> - they're operating illegally</li>
              <li>Tell them you've noticed and give them a chance to renew</li>
              <li>Find an alternative carrier meanwhile</li>
              <li>Consider reporting to Environment Agency if they continue operating</li>
            </ul>

            <h3>No Registration Found</h3>
            <p>
              If you can't find any registration:
            </p>
            <ul>
              <li><strong>DO NOT proceed</strong> with hiring them</li>
              <li>Double-check the spelling of the business name</li>
              <li>Ask them to provide the exact registration number</li>
              <li>Try searching by their business address</li>
              <li>If still nothing, they're probably unlicensed</li>
            </ul>

            <h3>Wrong Type of Registration</h3>
            <p>
              If they only have lower tier registration:
            </p>
            <ul>
              <li>They cannot legally collect your waste</li>
              <li>Find a properly registered upper tier carrier instead</li>
              <li>Report them if they're advertising services commercially</li>
            </ul>

            <h2>Keeping Records</h2>

            <h3>What to Document</h3>
            <p>
              Keep a record of:
            </p>
            <ul>
              <li>Date you checked the registration</li>
              <li>Registration number verified</li>
              <li>Where you checked it (which website/service)</li>
              <li>Screenshot or printout of registration details</li>
              <li>Photo of registration certificate (if shown)</li>
            </ul>

            <h3>How Long to Keep Records</h3>
            <ul>
              <li><strong>Households:</strong> Recommended 2 years minimum</li>
              <li><strong>Businesses:</strong> Legal requirement of 2 years minimum</li>
            </ul>

            <h2>For Businesses: Additional Checks</h2>

            <h3>Broker Registration</h3>
            <p>
              If using a waste broker (arranges disposal but doesn't transport):
            </p>
            <ul>
              <li>Check they're registered as a waste broker</li>
              <li>Separate registration from carrier registration</li>
              <li>Can be verified on the same Environment Agency register</li>
            </ul>

            <h3>Dealer Registration</h3>
            <p>
              Waste dealers (buy and sell waste) also need registration:
            </p>
            <ul>
              <li>Check for waste dealer registration</li>
              <li>Often registered as both carrier and dealer</li>
            </ul>

            <h2>Reporting Unlicensed Carriers</h2>

            <h3>When to Report</h3>
            <p>
              Report to the Environment Agency if you discover:
            </p>
            <ul>
              <li>Carriers operating without registration</li>
              <li>Carriers with expired registration still operating</li>
              <li>Lower tier carriers offering services commercially</li>
              <li>Suspected use of fake registration numbers</li>
            </ul>

            <h3>How to Report</h3>
            <ul>
              <li><strong>Phone:</strong> Environment Agency incident hotline 0800 80 70 60</li>
              <li><strong>Online:</strong> Through the Environment Agency website</li>
              <li><strong>Information needed:</strong> Business name, contact details, vehicle registration, what they're doing</li>
            </ul>

            <h2>Quick Reference Checklist</h2>

            <h3>Before Hiring Any Waste Carrier:</h3>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg not-prose">
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Ask for their Environment Agency registration number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Verify the number on our directory or EA public register</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Check status is "Active" not expired or suspended</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Confirm registration is "Upper Tier"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Check expiry date has sufficient time remaining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Match business name to registration records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Take a photo or screenshot of verified details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Keep all documentation for at least 2 years</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Verify Carriers Instantly</h3>
              <p className="mb-4">
                Use our directory to quickly verify any waste carrier's registration status and credentials.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/search-results">Check a Carrier Now</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckingLicense;
