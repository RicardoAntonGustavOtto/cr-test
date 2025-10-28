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

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 mb-10">
          <div className="flex gap-3">
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
                  <Card key={carrier.registrationNumber + index} className="bg-white hover:shadow-xl transition-all">
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
                          <p className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Postcode:</span> {carrier.postcode}
                          </p>
                        )}
                      </div>

                      <Link to={`/provider/${carrier.registrationNumber}`}>
                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                          Claim This Listing
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {carriers.length >= limit && (
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    className="bg-white hover:bg-white/90 text-foreground px-8 py-6"
                    onClick={handleLoadMore}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Loading more...
                      </>
                    ) : (
                      'Load More Results'
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
