import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReferringTo from "./pages/ReferringTo";
import InquiriesInto from "./pages/Inquiries";
import Endorsement from "./pages/Endorsement";
import CoreTeam from "./pages/Team";
import JoinUs from "./pages/Join";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/referring-to" element={<ReferringTo />} />
          <Route path="/inquiries" element={<InquiriesInto />} />
          <Route path="/endorsement" element={<Endorsement />} />
          <Route path="/team" element={<CoreTeam />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
