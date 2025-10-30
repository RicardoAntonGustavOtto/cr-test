import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HazardousWasteBasics = () => {
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
              Identifying Hazardous Waste
            </h1>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-amber-900 m-0 mb-2">
                    Important Safety Notice
                  </p>
                  <p className="text-amber-800 m-0">
                    Hazardous waste requires special handling and disposal. Improper disposal can harm human health and the environment.
                  </p>
                </div>
              </div>
            </div>

            <h2>What is Hazardous Waste?</h2>
            <p>
              Hazardous waste is any waste that contains substances or has properties that might make it harmful to human health or the environment. This includes waste that is:
            </p>
            <ul>
              <li><strong>Explosive:</strong> Can cause damage through explosion</li>
              <li><strong>Oxidising:</strong> Can cause fire when in contact with other materials</li>
              <li><strong>Flammable:</strong> Can easily catch fire</li>
              <li><strong>Irritant:</strong> Can cause inflammation to skin, eyes, or respiratory system</li>
              <li><strong>Harmful:</strong> Can cause damage to human health</li>
              <li><strong>Toxic:</strong> Can cause death or serious injury</li>
              <li><strong>Carcinogenic:</strong> Can cause cancer</li>
              <li><strong>Corrosive:</strong> Can destroy living tissue</li>
              <li><strong>Infectious:</strong> Contains viable microorganisms</li>
              <li><strong>Mutagenic:</strong> Can cause genetic mutations</li>
              <li><strong>Ecotoxic:</strong> Harmful to the environment</li>
            </ul>

            <h2>Common Household Hazardous Waste</h2>

            <h3>Paints and Solvents</h3>
            <ul>
              <li>Oil-based paints</li>
              <li>Paint thinners and removers</li>
              <li>Varnishes and wood treatments</li>
              <li>Aerosol paint cans</li>
            </ul>
            <p>
              <strong>Disposal:</strong> Take to household waste recycling center. Never pour down drains.
            </p>

            <h3>Chemicals and Cleaners</h3>
            <ul>
              <li>Oven cleaners</li>
              <li>Drain unblockers</li>
              <li>Bleach and disinfectants</li>
              <li>Ammonia-based cleaners</li>
              <li>Pool chemicals</li>
            </ul>

            <h3>Garden Chemicals</h3>
            <ul>
              <li>Pesticides and insecticides</li>
              <li>Herbicides and weed killers</li>
              <li>Fertilizers</li>
              <li>Wood preservatives</li>
            </ul>

            <h3>Automotive Products</h3>
            <ul>
              <li>Engine oil and transmission fluid</li>
              <li>Brake fluid</li>
              <li>Antifreeze</li>
              <li>Battery acid</li>
              <li>Car batteries</li>
            </ul>

            <h3>Other Common Hazardous Items</h3>
            <ul>
              <li>Fluorescent light bulbs (contain mercury)</li>
              <li>Batteries (all types)</li>
              <li>Thermometers and thermostats (if they contain mercury)</li>
              <li>Fire extinguishers</li>
              <li>Gas cylinders</li>
              <li>Asbestos-containing materials</li>
            </ul>

            <h2>Business Hazardous Waste</h2>
            <p>
              Businesses commonly produce hazardous waste including:
            </p>

            <h3>Industrial and Manufacturing</h3>
            <ul>
              <li>Chemical residues</li>
              <li>Contaminated materials</li>
              <li>Process waste</li>
              <li>Laboratory chemicals</li>
            </ul>

            <h3>Healthcare</h3>
            <ul>
              <li>Clinical waste</li>
              <li>Pharmaceutical waste</li>
              <li>Sharps and needles</li>
              <li>Infectious materials</li>
            </ul>

            <h3>Construction</h3>
            <ul>
              <li>Asbestos</li>
              <li>Lead paint</li>
              <li>Contaminated soil</li>
              <li>Chemical residues</li>
            </ul>

            <h2>Safe Handling and Storage</h2>

            <h3>Basic Safety Rules</h3>
            <ol>
              <li><strong>Keep Original Containers:</strong> Store in original packaging with labels intact</li>
              <li><strong>Separate Storage:</strong> Store away from other waste and out of reach of children</li>
              <li><strong>Avoid Mixing:</strong> Never mix different hazardous materials</li>
              <li><strong>Ventilation:</strong> Store in well-ventilated areas</li>
              <li><strong>Dry Location:</strong> Keep away from moisture</li>
              <li><strong>Secure Area:</strong> Store in locked cupboard or shed</li>
            </ol>

            <h3>What NOT to Do</h3>
            <ul>
              <li>Never pour down drains or sewers</li>
              <li>Never put in household bins</li>
              <li>Never burn hazardous waste</li>
              <li>Never bury in the ground</li>
              <li>Never pour into storm drains</li>
              <li>Never mix unknown chemicals</li>
            </ul>

            <h2>Disposal Options for Households</h2>

            <h3>Household Waste Recycling Centers</h3>
            <p>
              Most local recycling centers accept hazardous waste from households, including:
            </p>
            <ul>
              <li>Paints and chemicals</li>
              <li>Batteries</li>
              <li>Fluorescent tubes</li>
              <li>Engine oil</li>
              <li>Garden chemicals</li>
            </ul>
            <p>
              <strong>Important:</strong> Call ahead to confirm what they accept and any quantity limits.
            </p>

            <h3>Retailer Take-Back Schemes</h3>
            <ul>
              <li><strong>Batteries:</strong> Most supermarkets have collection points</li>
              <li><strong>Paint:</strong> Some DIY stores accept old paint</li>
              <li><strong>Electronics:</strong> Retailers must offer take-back for electrical items</li>
              <li><strong>Engine Oil:</strong> Garages and some petrol stations</li>
            </ul>

            <h2>Business Disposal Requirements</h2>

            <h3>Legal Obligations</h3>
            <p>
              Businesses that produce hazardous waste must:
            </p>
            <ul>
              <li>Classify and code waste correctly</li>
              <li>Store waste safely and securely</li>
              <li>Complete hazardous waste consignment notes</li>
              <li>Use authorized waste carriers and facilities</li>
              <li>Keep records for at least 3 years</li>
              <li>Notify the Environment Agency (if producing more than 500kg/year)</li>
            </ul>

            <h3>Hazardous Waste Consignment Notes</h3>
            <p>
              Different from regular waste transfer notes, these must include:
            </p>
            <ul>
              <li>European Waste Catalogue (EWC) code</li>
              <li>Chemical composition</li>
              <li>Physical properties</li>
              <li>Special handling requirements</li>
              <li>Multiple copies for different parties</li>
            </ul>

            <h2>Identifying Hazardous Waste</h2>

            <h3>Warning Symbols to Look For</h3>
            <p>
              Products containing hazardous substances display warning pictograms:
            </p>
            <ul>
              <li>Flame (flammable)</li>
              <li>Exclamation mark (harmful/irritant)</li>
              <li>Skull and crossbones (toxic)</li>
              <li>Corrosion (corrosive)</li>
              <li>Gas cylinder (under pressure)</li>
              <li>Exploding bomb (explosive)</li>
              <li>Health hazard (serious health effects)</li>
              <li>Environment (hazardous to aquatic environment)</li>
            </ul>

            <h3>Check the Label</h3>
            <p>
              Product labels will indicate:
            </p>
            <ul>
              <li>Hazard statements (H-codes)</li>
              <li>Precautionary statements (P-codes)</li>
              <li>Safety data sheets (for business users)</li>
            </ul>

            <h2>Penalties for Improper Disposal</h2>
            <p>
              Illegal disposal of hazardous waste can result in:
            </p>
            <ul>
              <li><strong>Unlimited Fines:</strong> In serious cases</li>
              <li><strong>Imprisonment:</strong> Up to 5 years</li>
              <li><strong>Clean-up Costs:</strong> You may be ordered to pay</li>
              <li><strong>Environmental Damage:</strong> Long-term contamination</li>
            </ul>

            <h2>Emergency Spills</h2>
            <p>
              If hazardous waste is spilled:
            </p>
            <ol>
              <li>Evacuate the area if dangerous</li>
              <li>Ventilate if safe to do so</li>
              <li>Wear protective equipment</li>
              <li>Contain the spill (use absorbent materials)</li>
              <li>Call emergency services if necessary (999)</li>
              <li>Report to Environment Agency: 0800 80 70 60</li>
            </ol>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Need Professional Hazardous Waste Disposal?</h3>
              <p className="mb-4">
                Find licensed carriers authorized to handle and dispose of hazardous waste safely and legally.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/search-results">Find Specialized Carriers</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HazardousWasteBasics;
