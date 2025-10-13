import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ManagementControlCenter from "./pages/ManagementControlCenter";
import OrderingPlatform from "./pages/OrderingPlatform";
import ProductConfiguration from "./pages/ProductConfiguration";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import Verticals from "./pages/Verticals";
import SupplierPortal from "./pages/SupplierPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/management-control-center" element={<ManagementControlCenter />} />
          <Route path="/ordering-platform" element={<OrderingPlatform />} />
          <Route path="/product-configuration" element={<ProductConfiguration />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/verticals" element={<Verticals />} />
          <Route path="/supplier-portal" element={<SupplierPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
