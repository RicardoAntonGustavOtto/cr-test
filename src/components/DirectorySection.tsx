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
    <section id="directory-section" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            UK Licensed Rubbish Removal Directory
          </h2>
          <p className="text-white/90 text-lg">
            {carriers.length > 0 ? `${carriers.length}+ licensed rubbish removal services found` : 'Search for licensed rubbish removal services'}
            {searchQuery && <> in {searchQuery}</>}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-5 mb-6">
          <div className="flex gap-3 mb-4">
            <Select value={searchType} onValueChange={setSearchType}>
              <SelectTrigger className="w-40">
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="location">Location</SelectItem>
                <SelectItem value="business">Business Name</SelectItem>
                <SelectItem value="registration">Registration No.</SelectItem>
              </SelectContent>
            </Select>
            
            <Input
              placeholder="london"
              className="flex-1 border-gray-300"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white px-8"
              onClick={handleSearch}
              disabled={loading}
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Filter by Services:</p>
            <div className="flex flex-wrap gap-2">
              {serviceFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant={selectedFilters.includes(filter) ? "default" : "outline"}
                  className={`cursor-pointer hover:bg-primary/10 transition-colors ${
                    selectedFilters.includes(filter) 
                      ? "bg-primary text-white" 
                      : "bg-white text-foreground border-gray-300"
                  }`}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-8">
          {carriers.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">
                      Rubbish Removal & Clearance Services: London
                    </h2>
                    <Badge className="bg-secondary text-white">
                      ✓ EA Registered
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    All providers are Environment Agency registered for legal waste disposal.
                  </p>
                  <p className="text-foreground font-semibold">
                    Found {carriers.length} approved waste carriers
                    {searchQuery && <> matching "{searchQuery}"</>}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available Providers
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevant">Most relevant</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                      <SelectItem value="expiry">Expiry Date</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto">
          {loading && offset === 0 ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-white" />
            </div>
          ) : carriers.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-muted-foreground text-lg">
                No waste carriers found. Try a different search.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {carriers.map((carrier, index) => (
                  <Card key={carrier.registrationNumber + index} className="bg-white hover:shadow-xl transition-all border">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-foreground leading-tight">
                        {carrier.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-1.5">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Registration:</span> {carrier.registrationNumber}
                        </p>
                        {carrier.expiryDate && (
                          <p className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Expires:</span> {new Date(carrier.expiryDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                          </p>
                        )}
                      </div>
                      
                      <div className="text-sm pt-3 border-t space-y-1.5">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Address:</span> {carrier.address}
                        </p>
                        {carrier.postcode && (
                          <>
                            <p className="text-muted-foreground">
                              <span className="font-semibold text-foreground">Town:</span> {carrier.address.split(',').slice(-2, -1)[0]?.trim() || 'N/A'}
                            </p>
                            <p className="text-muted-foreground">
                              <span className="font-semibold text-foreground">Postcode:</span> {carrier.postcode}
                            </p>
                          </>
                        )}
                      </div>

                      <Link to={`/provider/${carrier.registrationNumber}`}>
                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                          Claim This Listing
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {carriers.length >= limit && (
                <div className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <Button 
                      variant="outline" 
                      className="bg-white hover:bg-gray-100 text-foreground px-6"
                      onClick={() => setOffset(Math.max(0, offset - limit))}
                      disabled={loading || offset === 0}
                    >
                      Previous
                    </Button>
                    
                    {[1, 2, 3, 4, 5].map((page) => (
                      <Button
                        key={page}
                        variant={page === 3 ? "default" : "outline"}
                        className={page === 3 ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-white hover:bg-gray-100 text-foreground"}
                        onClick={() => setOffset((page - 1) * limit)}
                        disabled={loading}
                      >
                        {page}
                      </Button>
                    ))}
                    
                    <span className="text-white px-2">...</span>
                    
                    <Button
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-foreground"
                      disabled={loading}
                    >
                      331
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="bg-white hover:bg-gray-100 text-foreground px-6"
                      onClick={handleLoadMore}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Next'
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
