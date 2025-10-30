import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const carriers = [
  {
    name: "O2 WASTE SERVICES LIMITED",
    registration: "CBDU576461",
    expires: "2028-03-24",
    address: "170, ELM WALK",
    postcode: "SW20 9EG",
    phone: "07751668883",
    services: ["Household Waste", "Construction Waste", "+5"]
  },
  {
    name: "007 RECOVERY SERVICES LTD",
    registration: "CBDU551083",
    expires: "2027-09-10",
    address: "18, PLANETREES ROAD",
    postcode: "BD4 8AB",
    phone: "07824476870",
    services: []
  },
  {
    name: "Lee Collins trading as Lee Collins",
    registration: "CBDU443517",
    expires: "2028-06-30",
    address: "9, SPRINGFIELD GARDENS, PRESTWICH, MANCHESTER, M25 3ET",
    postcode: "M25 3ET",
    phone: "07800941552",
    services: ["Household Waste", "Garden Waste", "+8"]
  }
];

const FeaturedCarriers = () => {
  return (
    <div className="bg-[#72b337]/80 pb-16 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-3">
            Featured Waste Carriers
          </h2>
          <p className="text-lg text-[#1a1a1a]/90 max-w-xl pb-4 mx-auto">
            A selection of licensed carriers from our directory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carriers.map((carrier) => (
            <div
              key={carrier.registration}
              className="text-card-foreground shadow-sm flex flex-col overflow-hidden rounded-lg border border-stone-200 h-full bg-white transition-all duration-300 ease-in-out hover:bg-[#1f502e]/95 hover:border-[#1f502e] group"
            >
              <div className="flex-grow p-4">
                <div className="flex gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg leading-tight text-stone-800 truncate group-hover:text-white transition-colors duration-300">
                      {carrier.name}
                    </h3>

                    <div className="mt-2 space-y-1">
                      <div>
                        <span className="font-medium text-stone-500 group-hover:text-green-100 transition-colors duration-300">
                          Registration:
                        </span>
                        <span className="text-stone-700 ml-1 group-hover:text-white transition-colors duration-300">
                          {carrier.registration}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-stone-500 group-hover:text-green-100 transition-colors duration-300">
                          Expires:
                        </span>
                        <span className="text-stone-700 ml-1 group-hover:text-white transition-colors duration-300">
                          {carrier.expires}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="text-sm text-stone-600 group-hover:text-green-100 transition-colors duration-300 line-clamp-2">
                        {carrier.address}
                      </div>
                      <div className="text-sm text-stone-700 font-medium group-hover:text-white transition-colors duration-300 mt-1">
                        {carrier.postcode}
                      </div>
                    </div>

                    {carrier.services.length > 0 && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {carrier.services.map((service) => (
                            <span
                              key={service}
                              className="inline-block px-2 py-0.5 text-xs bg-[#33613a]/10 text-[#33613a] rounded group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-2 flex items-center gap-2 truncate">
                      <Phone className="w-[14px] h-[14px] text-stone-400 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                      <a
                        href={`tel:${carrier.phone}`}
                        className="text-blue-600 text-sm leading-tight group-hover:text-white transition-colors duration-300"
                      >
                        {carrier.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-stone-50/50 p-3 border-t mt-auto group-hover:bg-[#1f502e]/80 group-hover:border-[#1f502e]/80 transition-colors duration-300">
                <Link
                  to={`/provider/${carrier.registration}`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md px-3 w-full bg-[#72b337] hover:bg-[#72b337]/90 text-white h-9 text-sm font-semibold transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/search-results"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 rounded-md px-8 bg-[#1f502e] hover:bg-[#1f502e]/90 transition-colors duration-300"
          >
            View Full Directory
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarriers;
