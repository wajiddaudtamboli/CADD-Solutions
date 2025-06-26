
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
import { FloatingOrb, ParticleField, GridPattern } from '@/components/ui/floating-elements';

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50/30 to-orange-50/30 dark:from-gray-900 dark:via-yellow-900/10 dark:to-amber-900/10 transition-colors duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <GridPattern />
      <FloatingOrb size="lg" color="amber" position="top-right" delay={0} />
      <FloatingOrb size="md" color="orange" position="bottom-left" delay={1} />
      <FloatingOrb size="sm" color="purple" position="top-left" delay={2} />
      <ParticleField count={30} />
      
      <Navigation />
      <main className="content-professional relative z-10">
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
      </main>
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
