
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import EnhancedServices from '@/components/sections/EnhancedServices';

import AboutCompany from '@/components/sections/AboutCompany';
import EnhancedProjects from '@/components/sections/EnhancedProjects';
import OurLeadership from '@/components/sections/OurLeadership';
import OurValues from '@/components/sections/OurValues';
import Testimonials from '@/components/sections/Testimonials';
import ReviewSummary from '@/components/sections/ReviewSummary';
import FAQ from '@/components/sections/FAQ';
import EnhancedContact from '@/components/sections/EnhancedContact';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/Chatbot';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace('#', '');
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    // Delay ensures the target section is mounted before scroll on route transitions.
    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <motion.div
      className="bg-gradient-to-br from-background via-primary/5 to-accent/5 transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <EnhancedServices />

      <AboutCompany />
      <EnhancedProjects />
      <OurLeadership />
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
