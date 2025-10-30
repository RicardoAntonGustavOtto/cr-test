import { MapPin, FileText, Building, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const popularLocations = [
  "Manchester",
  "London",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Liverpool",
];

export const SearchSection = () => {
  const navigate = useNavigate();
  const [locationSearch, setLocationSearch] = useState("");
  const [activeTab, setActiveTab] = useState("location");

  const handleSearch = (query: string, type: string) => {
    navigate(`/search-results?query=${encodeURIComponent(query)}&type=${type}`);
  };

  return (
    <section className="pt-12 pb-28 bg-gradient-to-b from-[#1f502e] to-[#1f502e]/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            UK's Approved Waste Carriers
          </h1>
          <p className="text-green-100 text-lg mb-1 opacity-90">
            Find verified waste removal specialists and check licenses.
          </p>
          <p className="text-green-100 text-base opacity-80">
            All providers are Environment Agency approved with valid certificates.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-left">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (locationSearch.trim()) {
                handleSearch(locationSearch, 'location');
              }
            }}
          >
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("location")}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 flex-1 min-w-[120px] justify-center h-11 text-sm sm:text-base ${
                  activeTab === "location"
                    ? "bg-[#1f502e] text-white hover:bg-[#1f502e]/90 border-[#1f502e]"
                    : "text-waste-neutral-700 border-waste-neutral-300 bg-white hover:bg-waste-neutral-100 hover:text-waste-neutral-800 border"
                }`}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Location
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("business")}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 flex-1 min-w-[120px] justify-center h-11 text-sm sm:text-base ${
                  activeTab === "business"
                    ? "bg-[#1f502e] text-white hover:bg-[#1f502e]/90 border-[#1f502e]"
                    : "text-waste-neutral-700 border-waste-neutral-300 bg-white hover:bg-waste-neutral-100 hover:text-waste-neutral-800 border"
                }`}
              >
                <Building className="w-4 h-4 mr-2" />
                Business Name
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("license")}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 flex-1 min-w-[120px] justify-center h-11 text-sm sm:text-base ${
                  activeTab === "license"
                    ? "bg-[#1f502e] text-white hover:bg-[#1f502e]/90 border-[#1f502e]"
                    : "text-waste-neutral-700 border-waste-neutral-300 bg-white hover:bg-waste-neutral-100 hover:text-waste-neutral-800 border"
                }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                License No.
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-waste-neutral-400 w-[18px] h-[18px]" />
                <input
                  type="text"
                  className="flex rounded-md border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 pl-10 w-full text-base border-waste-neutral-300 bg-white text-waste-neutral-900 placeholder:text-waste-neutral-500 focus-visible:ring-[#72b337] focus-visible:border-[#72b337] !text-black"
                  placeholder="Enter town, city, or postcode..."
                  aria-label="Search by Location"
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  style={{ color: "rgb(0, 0, 0)" }}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground py-2 h-12 w-full sm:w-auto bg-[#72b337] hover:bg-[#72b337]/90 text-base px-6 flex-shrink-0"
                aria-label="Submit search"
              >
                <Search className="w-[18px] h-[18px] mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-green-100 mb-2 text-sm">Popular location searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularLocations.map((location) => (
              <button
                key={location}
                onClick={() => handleSearch(location, 'location')}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md text-green-100 hover:text-white hover:bg-[#72b337]/20 px-3"
              >
                <MapPin className="w-[14px] h-[14px] mr-1.5" />
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
