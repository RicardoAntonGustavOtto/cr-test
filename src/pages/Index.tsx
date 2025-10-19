import Header from "@/components/Header";
import { SearchSection } from "@/components/SearchSection";
import WarningAlert from "@/components/WarningAlert";
import FeaturedCarriers from "@/components/FeaturedCarriers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <SearchSection />
        <WarningAlert />
        <FeaturedCarriers />
      </main>
    </div>
  );
};

export default Index;
