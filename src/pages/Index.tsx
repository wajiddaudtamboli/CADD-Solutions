
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import EnhancedServices from '@/components/sections/EnhancedServices';

import AboutCompany from '@/components/sections/AboutCompany';
import EnhancedProjects from '@/components/sections/EnhancedProjects';
import OurValues from '@/components/sections/OurValues';
import Testimonials from '@/components/sections/Testimonials';
import ReviewSummary from '@/components/sections/ReviewSummary';
import FAQ from '@/components/sections/FAQ';
import EnhancedContact from '@/components/sections/EnhancedContact';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/Chatbot';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 transition-colors duration-500">
      <Navigation />
      <div className="flex flex-col w-full">
        <Hero />
        <EnhancedServices />
        <AboutCompany />
        <EnhancedProjects />
        <OurValues />
        <Testimonials />
        <ReviewSummary />
        <FAQ />
        <EnhancedContact />
      </div>
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </div>
  );
};

export default Index;
