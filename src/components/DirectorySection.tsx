import { Search, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useWasteCarriers } from "@/hooks/useWasteCarriers";

export const DirectorySection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const { carriers, loading, total } = useWasteCarriers({
    searchQuery,
    limit,
    offset,
  });

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setOffset(0);
  };

  const handleLoadMore = () => {
    setOffset(prev => prev + limit);
  };
  
  return (
    <section id="directory-section" className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            UK Licensed Rubbish Removal Directory
          </h2>
          <p className="text-white/90">
            Verify if your rubbish removal provider is officially registered
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Search by name, registration or location"
                className="flex-1"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <Button 
                className="bg-secondary hover:bg-secondary/90"
                onClick={handleSearch}
                disabled={loading}
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {loading && offset === 0 ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-white" />
          </div>
        ) : carriers.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No waste carriers found. Try a different search.
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="bg-white rounded-lg p-6 mb-6">
              <p className="text-foreground font-semibold">
                Found {carriers.length} approved waste carriers
                {searchQuery && <> matching "{searchQuery}"</>}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Available Providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carriers.map((carrier, index) => (
                <Card key={carrier.registrationNumber + index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {carrier.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Registration:</span> {carrier.registrationNumber}
                      </p>
                      {carrier.expiryDate && (
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Expires:</span> {new Date(carrier.expiryDate).toLocaleDateString('en-GB')}
                        </p>
                      )}
                    </div>
                    
                    <div className="text-sm pt-2 border-t">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Address:</span> {carrier.address}
                      </p>
                      {carrier.postcode && (
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Postcode:</span> {carrier.postcode}
                        </p>
                      )}
                    </div>

                    <Link to={`/provider/${carrier.registrationNumber}`}>
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                        Claim This Listing
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/90 mb-4">
                Showing {offset + carriers.length} Upper Tier registered carriers
              </p>
              {carriers.length >= limit && (
                <Button 
                  variant="outline" 
                  className="bg-white"
                  onClick={handleLoadMore}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Load More'
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
