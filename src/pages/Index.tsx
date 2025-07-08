
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
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background Elements */}
      <GridPattern />
      <FloatingOrb size="lg" color="amber" position="top-right" delay={0} />
      <FloatingOrb size="md" color="blue" position="bottom-left" delay={1} />
      <FloatingOrb size="sm" color="purple" position="top-left" delay={2} />
      <ParticleField count={30} />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/3 via-transparent to-purple-500/3 pointer-events-none" />
      
      <Navigation />
      <main className="relative z-10 pt-16 lg:pt-20">
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
