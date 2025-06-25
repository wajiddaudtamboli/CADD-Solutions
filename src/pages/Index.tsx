
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Products from '@/components/sections/Products';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import ReviewSummary from '@/components/sections/ReviewSummary';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <Services />
      <Products />
      <Projects />
      <Testimonials />
      <ReviewSummary />
      <Contact />
      <Footer />
      <Chatbot />
    </motion.div>
  );
};

export default Index;
