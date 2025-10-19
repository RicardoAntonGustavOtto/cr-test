import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WarningAlert from "@/components/WarningAlert";
import FeaturedCarriers from "@/components/FeaturedCarriers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WarningAlert />
        <FeaturedCarriers />
      </main>
    </div>
  );
};

export default Index;
