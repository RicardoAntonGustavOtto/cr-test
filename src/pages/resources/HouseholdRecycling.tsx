import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const HouseholdRecycling = () => {
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
              Quick Guide to Household Recycling
            </h1>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <p className="text-lg leading-relaxed m-0">
                Proper recycling helps reduce landfill waste, conserves natural resources, and protects the environment. This guide covers the basics of household recycling in the UK.
              </p>
            </div>

            <h2>What Can Be Recycled?</h2>
            <p>
              Most UK councils accept the following materials in household recycling:
            </p>

            <h3>Paper and Cardboard</h3>
            <ul>
              <li>Newspapers and magazines</li>
              <li>Office paper and junk mail</li>
              <li>Cardboard boxes (flattened)</li>
              <li>Greetings cards (without glitter)</li>
              <li>Phone directories</li>
            </ul>
            <p>
              <strong>NOT recyclable:</strong> Wallpaper, tissue paper, wet or food-soiled paper, laminated paper.
            </p>

            <h3>Glass</h3>
            <ul>
              <li>Glass bottles</li>
              <li>Glass jars</li>
              <li>Glass food containers</li>
            </ul>
            <p>
              <strong>Remove:</strong> Lids and caps (recycle separately).<br/>
              <strong>Rinse:</strong> Clean containers before recycling.
            </p>
            <p>
              <strong>NOT recyclable:</strong> Drinking glasses, window glass, mirrors, light bulbs, Pyrex or cookware.
            </p>

            <h3>Plastic</h3>
            <ul>
              <li>Plastic bottles (drinks, milk, toiletries)</li>
              <li>Plastic tubs and pots (yogurt, margarine)</li>
              <li>Plastic trays (meat, fruit, ready meals)</li>
              <li>Plastic carrier bags (at larger supermarkets)</li>
            </ul>
            <p>
              <strong>Check the number:</strong> Look for recycling symbols with numbers 1-7. Your council may only accept certain types.
            </p>
            <p>
              <strong>NOT recyclable:</strong> Plastic film, bubble wrap, cling film, black plastic trays (in most areas).
            </p>

            <h3>Metal</h3>
            <ul>
              <li>Aluminum cans (drinks)</li>
              <li>Steel/tin cans (food)</li>
              <li>Aluminum foil and trays (clean)</li>
              <li>Aerosol cans (empty)</li>
              <li>Metal jar lids</li>
            </ul>
            <p>
              <strong>Tip:</strong> Rinse cans and remove paper labels where possible.
            </p>

            <h2>How to Recycle Correctly</h2>

            <h3>General Rules</h3>
            <ol>
              <li><strong>Empty and Rinse:</strong> Remove food residue from containers</li>
              <li><strong>Remove Lids:</strong> Separate lids from bottles and jars</li>
              <li><strong>Flatten Boxes:</strong> Flatten cardboard to save space</li>
              <li><strong>Don't Bag It:</strong> Put items loose in your recycling bin (except glass in some areas)</li>
              <li><strong>Check Locally:</strong> Rules vary by council</li>
            </ol>

            <h3>Common Mistakes</h3>
            <ul>
              <li><strong>Wishcycling:</strong> Don't put non-recyclable items in recycling hoping they'll be recycled</li>
              <li><strong>Contamination:</strong> One greasy pizza box can contaminate an entire batch</li>
              <li><strong>Black Bags:</strong> Don't put recycling in black bin bags</li>
              <li><strong>Loose Caps:</strong> Small plastic bottle caps can jam machinery</li>
            </ul>

            <h2>Special Recycling Items</h2>

            <h3>Electrical Items (WEEE)</h3>
            <p>
              Electrical items must be recycled at designated points:
            </p>
            <ul>
              <li>Take to your local recycling center</li>
              <li>Many retailers offer take-back schemes</li>
              <li>Some councils offer kerbside collection</li>
            </ul>

            <h3>Batteries</h3>
            <p>
              Never put batteries in household bins. Recycle at:
            </p>
            <ul>
              <li>Supermarkets (collection points at entrance)</li>
              <li>Libraries and community centers</li>
              <li>Recycling centers</li>
              <li>Some retailers</li>
            </ul>

            <h3>Textiles and Clothing</h3>
            <ul>
              <li>Charity shops (good condition items)</li>
              <li>Clothing banks</li>
              <li>Textile recycling (worn items)</li>
              <li>Some councils offer kerbside collection</li>
            </ul>

            <h3>Food Waste</h3>
            <p>
              If your council collects food waste:
            </p>
            <ul>
              <li>Use provided caddy and bags/liners</li>
              <li>Include all cooked and uncooked food</li>
              <li>Meat, fish, dairy, and bones are usually accepted</li>
              <li>No packaging or liquids</li>
            </ul>
            <p>
              Alternatively, compost at home.
            </p>

            <h2>Garden Waste</h2>
            <p>
              Options for garden waste disposal:
            </p>
            <ul>
              <li><strong>Council Collection:</strong> Usually requires subscription</li>
              <li><strong>Home Composting:</strong> For grass, leaves, and plant material</li>
              <li><strong>Recycling Center:</strong> Free to take garden waste</li>
              <li><strong>Licensed Carrier:</strong> For large amounts</li>
            </ul>

            <h2>Items That Need Special Disposal</h2>

            <h3>Hazardous Household Waste</h3>
            <p>
              These items require special handling:
            </p>
            <ul>
              <li>Paint and chemicals</li>
              <li>Oil and fuels</li>
              <li>Pesticides and herbicides</li>
              <li>Fluorescent tubes</li>
              <li>Asbestos</li>
            </ul>
            <p>
              <strong>Take to:</strong> Household waste recycling center (check what they accept)
            </p>

            <h3>Large Items (Bulky Waste)</h3>
            <p>
              For furniture, appliances, and large items:
            </p>
            <ul>
              <li>Council bulky waste collection (usually for a fee)</li>
              <li>Recycling center</li>
              <li>Charity collection (good condition items)</li>
              <li>Licensed waste carrier</li>
            </ul>

            <h2>Check Your Local Rules</h2>
            <p>
              Recycling rules vary by council. To find your local guidelines:
            </p>
            <ol>
              <li>Visit your council's website</li>
              <li>Check your recycling calendar</li>
              <li>Call your council's waste department</li>
              <li>Look for the Recycle Now postcode checker</li>
            </ol>

            <h2>Reduce and Reuse First</h2>
            <p>
              Remember: Recycling is the third option after reducing and reusing.
            </p>
            <ul>
              <li><strong>Reduce:</strong> Buy less, choose products with less packaging</li>
              <li><strong>Reuse:</strong> Repair items, donate unwanted goods, buy second-hand</li>
              <li><strong>Recycle:</strong> Only when reduction and reuse aren't possible</li>
            </ul>

            <div className="bg-[#1f502e] text-white p-6 rounded-lg mt-8">
              <h3 className="text-white mt-0">Need to Dispose of Large Amounts of Waste?</h3>
              <p className="mb-4">
                Find licensed waste carriers who can help with commercial quantities or specialized waste disposal.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/search-results">Find Waste Carriers</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HouseholdRecycling;
