import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "@/components/three/features/CustomCursor";
import { ScrollProgress3D } from "@/components/ScrollProgress3D";
import AnimatedRoutes from "@/components/AnimatedRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";


import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const queryClient = new QueryClient();

const App = () => {
  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CustomCursor />
        <ScrollProgress3D />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
