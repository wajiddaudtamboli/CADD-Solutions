
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ElfsightChatbot from "./components/ElfsightChatbot";
import About from "./pages/About";
import Admin from "./pages/Admin";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Scholarship from "./pages/Scholarship";
import StudentPortal from "./pages/StudentPortal";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add body class for navigation spacing optimization
    document.body.classList.add('navigation-optimized');

    return () => {
      document.body.classList.remove('navigation-optimized');
    };
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/course/:id" element={<CourseDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/student-portal" element={<StudentPortal />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/scholarship" element={<Scholarship />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
              {/* Elfsight AI Chatbot */}
              <ElfsightChatbot />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
