import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import SearchResults from "./pages/SearchResults";
import ProviderDetail from "./pages/ProviderDetail";
import ClaimListing from "./pages/ClaimListing";
import AdminSync from "./pages/AdminSync";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Resources from "./pages/Resources";
import CarrierLicensing from "./pages/resources/CarrierLicensing";
import DutyOfCare from "./pages/resources/DutyOfCare";
import FlyTippingRisks from "./pages/resources/FlyTippingRisks";
import HouseholdRecycling from "./pages/resources/HouseholdRecycling";
import HazardousWasteBasics from "./pages/resources/HazardousWasteBasics";
import AvoidingFlyTipping from "./pages/resources/AvoidingFlyTipping";
import UsingDirectory from "./pages/resources/UsingDirectory";
import CheckingLicense from "./pages/resources/CheckingLicense";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/provider/:registrationNumber" element={<ProviderDetail />} />
            <Route path="/claim/:registrationNumber" element={<ClaimListing />} />
            <Route path="/admin/sync" element={<AdminSync />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/carrier-licensing" element={<CarrierLicensing />} />
            <Route path="/resources/duty-of-care" element={<DutyOfCare />} />
            <Route path="/resources/fly-tipping-risks" element={<FlyTippingRisks />} />
            <Route path="/resources/household-recycling" element={<HouseholdRecycling />} />
            <Route path="/resources/hazardous-waste-basics" element={<HazardousWasteBasics />} />
            <Route path="/resources/avoiding-fly-tipping" element={<AvoidingFlyTipping />} />
            <Route path="/resources/using-directory" element={<UsingDirectory />} />
            <Route path="/resources/checking-license" element={<CheckingLicense />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
