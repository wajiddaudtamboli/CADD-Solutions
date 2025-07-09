
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import EnhancedServices from '@/components/sections/EnhancedServices';
import Products from '@/components/sections/Products';
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
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-yellow-900 dark:to-amber-900 transition-colors duration-300 pb-16 xl:pb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <EnhancedServices />
      <Products />
      <AboutCompany />
      <EnhancedProjects />
      <OurValues />
      <Testimonials />
      <ReviewSummary />
      <FAQ />
      <EnhancedContact />
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
