import { Search, Loader2, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useWasteCarriers } from "@/hooks/useWasteCarriers";

export const DirectorySection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [searchType, setSearchType] = useState("location");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("relevant");
  const limit = 20;

  const { carriers, loading, total } = useWasteCarriers({
    searchQuery,
    limit,
    offset,
  });

  const serviceFilters = [
    "Household Waste",
    "Garden Waste", 
    "Construction Waste",
    "Commercial Waste",
    "Hazardous Waste",
    "Electronic Waste",
    "Metal Waste",
    "Furniture Removal",
    "Skip Hire",
    "Recycling Services"
  ];

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setOffset(0);
  };

  const handleLoadMore = () => {
    setOffset(prev => prev + limit);
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };
  
  return (
    <>
      <section id="directory-section" className="bg-[#33613a] py-6 md:py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-6 md:mb-10">
            <h1 className="text-2xl md:text-[1.875rem] font-bold text-white mb-2 leading-8 md:leading-9">
              UK Licensed Rubbish Removal Directory
            </h1>
            <p className="text-[#E1FFDA] mb-4 md:mb-6">
              {carriers.length > 0 ? `${carriers.length}+ licensed rubbish removal services found` : 'Search for licensed rubbish removal services'}
              {searchQuery && <> in {searchQuery}</>}
            </p>

            <div className="bg-white rounded-lg shadow-lg p-2 mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="hidden sm:block">
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger className="w-[180px] h-12 bg-white border-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="location">Location</SelectItem>
                      <SelectItem value="business">Business Name</SelectItem>
                      <SelectItem value="registration">Registration No.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1 relative">
                  <MapPin className="w-[18px] h-[18px] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  <Input
                    placeholder="Enter town, city or postcode"
                    className="h-12 pl-10 bg-white border-gray-300 text-foreground placeholder:text-gray-400"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                  />
                </div>

                <Button 
                  className="h-12 bg-secondary hover:bg-secondary/90 text-white px-8"
                  onClick={handleSearch}
                  disabled={loading}
                >
                  <Search className="w-[18px] h-[18px] mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-white/90 mb-2 font-medium">Filter by Services:</p>
              <div className="flex flex-wrap gap-2">
                {serviceFilters.map((filter) => (
                  <Badge
                    key={filter}
                    className={`cursor-pointer transition-colors rounded-full text-xs font-semibold ${
                      selectedFilters.includes(filter) 
                        ? "bg-secondary text-white hover:bg-secondary/90" 
                        : "bg-white text-gray-600 hover:bg-secondary/50 border-0"
                    }`}
                    onClick={() => toggleFilter(filter)}
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="container mx-auto px-4">
          {loading && offset === 0 ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
            </div>
          ) : carriers.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-muted-foreground text-lg">
                No waste carriers found. Try a different search.
              </p>
            </div>
          ) : (
            <div className="container mx-auto px-4 py-6 md:py-8">
              <div className="max-w-7xl mx-auto bg-white border border-primary/10 rounded-lg p-4 md:p-6 shadow-sm">
                <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-xl md:text-2xl font-bold text-primary">
                        Rubbish Removal & Clearance Services: London
                      </h2>
                      <Badge className="bg-secondary text-white rounded-md border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        EA Registered
                      </Badge>
                    </div>
                    <p className="text-primary/70 text-sm">
                      All providers are Environment Agency registered for legal waste disposal.
                    </p>
                  </div>
                  <div className="text-sm text-primary/70 mt-3 md:mt-0">
                    Sort by:
                    <select 
                      className="ml-2 border border-primary/20 rounded px-2 py-1 focus:ring-secondary focus:border-secondary"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="relevant">Most relevant</option>
                      <option value="claimed">Claimed status</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-stone-700">
                      Found {carriers.length} approved waste carriers
                      {searchQuery && <span className="font-normal text-base"> matching "{searchQuery}"</span>}
                    </h3>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-base font-semibold text-stone-600 mb-3 border-b pb-1">
                      Available Providers
                    </h4>
                    
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                      {carriers.map((carrier, index) => (
                        <div key={carrier.registrationNumber + index} className="relative flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg border border-stone-200 h-full bg-white">
                          <div className="flex-grow p-4">
                            <div className="mb-3">
                              <h3 className="font-semibold text-lg text-stone-800 mb-1">
                                {carrier.name}
                              </h3>
                            </div>
                            
                            <div className="mb-3">
                              <div className="text-sm mb-1">
                                <span className="font-medium text-stone-500">Registration:</span>
                                <span className="text-stone-700 ml-1">{carrier.registrationNumber}</span>
                              </div>
                              {carrier.expiryDate && (
                                <div className="text-sm">
                                  <span className="font-medium text-stone-500">Expires:</span>
                                  <span className="text-stone-700 ml-1">
                                    {new Date(carrier.expiryDate).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            <div className="text-sm text-stone-600">
                              <div className="mb-1">
                                <span className="font-medium text-stone-500">Address:</span>
                                <span className="ml-1">{carrier.address}</span>
                              </div>
                              <div className="flex flex-wrap gap-4">
                                {carrier.address.split(',').length > 2 && (
                                  <span>
                                    <span className="font-medium text-stone-500">Town:</span>
                                    <span className="ml-1">{carrier.address.split(',').slice(-2, -1)[0]?.trim() || 'N/A'}</span>
                                  </span>
                                )}
                                {carrier.postcode && (
                                  <span>
                                    <span className="font-medium text-stone-500">Postcode:</span>
                                    <span className="ml-1">{carrier.postcode}</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center bg-stone-50 p-3 border-t mt-auto">
                            <Link 
                              to={`/provider/${carrier.registrationNumber}`}
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 rounded-md px-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                            >
                              Claim This Listing
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="h-9 rounded-md px-3"
                        onClick={() => setOffset(Math.max(0, offset - limit))}
                        disabled={loading || offset === 0}
                      >
                        Previous
                      </Button>
                      
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((page) => (
                          <Button
                            key={page}
                            variant={page === 3 ? "default" : "outline"}
                            className={page === 3 ? "bg-blue-600 hover:bg-blue-700 text-white h-9 rounded-md px-3" : "h-9 rounded-md px-3"}
                            onClick={() => setOffset((page - 1) * limit)}
                            disabled={loading}
                          >
                            {page}
                          </Button>
                        ))}
                        
                        <span className="px-1">...</span>
                        
                        <Button
                          variant="outline"
                          className="h-9 rounded-md px-3"
                          disabled={loading}
                        >
                          331
                        </Button>
                      </div>
                      
                      <Button
                        variant="outline"
                        className="h-9 rounded-md px-3"
                        onClick={handleLoadMore}
                        disabled={loading}
                      >
                        {loading ? 'Loading...' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
