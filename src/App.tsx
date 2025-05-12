
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SeriousProjects from "./pages/SeriousProjects";
import FunProjects from "./pages/FunProjects";
import TechnicalBlogs from "./pages/TechnicalBlogs";
import Guides from "./pages/Guides";
import DataPoisoningPaper from "./pages/DataPoisoningPaper";
import PapersDaily from "./pages/PapersDaily";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/serious-projects" element={<SeriousProjects />} />
          <Route path="/fun-projects" element={<FunProjects />} />
          <Route path="/technical-blogs" element={<TechnicalBlogs />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/papers/data-poisoning" element={<DataPoisoningPaper />} />
          <Route path="/papers-daily" element={<PapersDaily />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
