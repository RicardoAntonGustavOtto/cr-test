import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchSection } from "@/components/SearchSection";
import WarningAlert from "@/components/WarningAlert";
import FeaturedCarriers from "@/components/FeaturedCarriers";
import { Link } from "react-router-dom";
import { ShieldCheck, Recycle, CheckCircle } from "lucide-react";

const majorCities = [
  "London", "Manchester", "Birmingham", "Leeds", "Liverpool",
  "Sheffield", "Bristol", "Newcastle", "Nottingham", "Leicester",
  "Southampton", "Portsmouth", "Plymouth", "Brighton", "Derby",
  "Reading", "Stoke-on-Trent", "Coventry", "Hull", "Bradford"
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <SearchSection />

        <div className="relative">
          <WarningAlert />

          <FeaturedCarriers />
        </div>

        {/* Why Choose Verified Carriers Section */}
        <div className="bg-[#1f502e]/5">
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3 text-waste-neutral-800">
                  Why Choose Verified Carriers?
                </h2>
                <p className="max-w-2xl mx-auto text-waste-neutral-600 text-lg">
                  Ensure your waste is handled legally, safely, and responsibly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border text-card-foreground border-t-4 border-t-waste-green-500 bg-waste-neutral-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 text-center">
                    <div className="mb-5 flex justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100">
                        <ShieldCheck className="w-6 h-6 text-green-700" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-waste-neutral-800">
                      Vetted & Approved
                    </h3>
                    <p className="text-waste-neutral-600">
                      Every provider is thoroughly checked for valid waste carrier licenses and compliance.
                    </p>
                  </div>
                </div>

                <div className="border text-card-foreground border-t-4 border-t-waste-green-500 bg-waste-neutral-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 text-center">
                    <div className="mb-5 flex justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                        <Recycle className="w-6 h-6 text-blue-700" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-waste-neutral-800">
                      Environmentally Responsible
                    </h3>
                    <p className="text-waste-neutral-600">
                      Connect with carriers committed to proper disposal protocols and environmental protection.
                    </p>
                  </div>
                </div>

                <div className="border text-card-foreground border-t-4 border-t-waste-green-500 bg-waste-neutral-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 text-center">
                    <div className="mb-5 flex justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                        <CheckCircle className="w-6 h-6 text-emerald-700" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-waste-neutral-800">
                      Prevent Fly-Tipping Risks
                    </h3>
                    <p className="text-waste-neutral-600">
                      Using licensed carriers protects you from fines associated with illegal waste dumping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Find Local Waste Removal Services Section */}
        <section className="py-12 px-4 bg-[#1f502e]/5 border-t border-[#1f502e]/10">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6 text-[#1f502e]">
                Find Local Waste Removal Services
              </h2>
              <p className="mb-8 text-[#1f502e]/80">
                Quickly find approved carriers in major UK cities.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {majorCities.map((city) => (
                  <Link
                    key={city}
                    to={`/search-results?query=${encodeURIComponent(city)}&type=location`}
                    className="block group"
                  >
                    <div className="bg-white p-4 rounded-lg border border-[#1f502e]/20 group-hover:border-[#72b337] group-hover:shadow-sm transition-all duration-200 h-full flex items-center justify-center">
                      <h3 className="font-medium text-[#1f502e]/90 group-hover:text-[#72b337] text-center">
                        {city}
                      </h3>
                    </div>
                  </Link>
                ))}
                <Link to="/search-results" className="block group col-span-full sm:col-start-2 md:col-start-auto lg:col-start-auto">
                  <div className="bg-[#1f502e]/5 p-4 rounded-lg border border-[#1f502e]/20 group-hover:border-[#72b337] group-hover:shadow-sm transition-all duration-200">
                    <h3 className="font-medium text-[#1f502e] mb-0 text-center">
                      View All Locations
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#1f502e] text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Are You a Licensed Waste Carrier?
            </h2>
            <p className="mb-8 text-lg text-green-100">
              Join our network of approved providers and connect with customers seeking reliable waste removal services.
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-white text-[#1f502e] hover:bg-[#72b337] hover:text-white transition-colors"
            >
              Register Your Business
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
