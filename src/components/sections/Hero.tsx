
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50/50 dark:from-gray-900 dark:via-yellow-900/10 dark:to-amber-900/10 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-professional-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-yellow-400/20 rounded-full blur-3xl animate-professional-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-red-400/20 rounded-full blur-3xl animate-professional-pulse"></div>
      
      <div className="professional-container relative z-10">
        <div className="professional-grid professional-grid-2 items-center gap-16">
          {/* Left Content */}
          <motion.div
            className="professional-spacing text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-full border border-amber-200 dark:border-amber-600/30 mb-6">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Professional Training Institute</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="professional-heading text-left lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Master Professional <br />
              <span className="text-gradient-professional">CAD & Engineering</span> <br />
              Skills
            </motion.h1>
            
            <motion.p 
              className="professional-text text-left lg:text-left max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transform your career with industry-leading training in CAD, CAM, CAE, Civil Engineering, and Software Development. Join thousands of successful professionals who started their journey with CADD Solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button className="professional-button flex items-center gap-3 text-lg">
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Button>
              <Button className="professional-button-secondary flex items-center gap-3 text-lg">
                <Play className="w-5 h-5" /> Watch Demo
              </Button>
            </motion.div>

            <motion.div 
              className="professional-grid professional-grid-3 gap-8 pt-12 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-gradient-professional mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                  <Users className="w-4 h-4" />
                  Successful Students
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-gradient-professional mb-2">15+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                  <BookOpen className="w-4 h-4" />
                  Professional Courses
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-gradient-professional mb-2">95%</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                  <Award className="w-4 h-4" />
                  Placement Success
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Media Frame */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative w-full max-w-lg hover-professional"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="media-frame shadow-professional-xl">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Professional Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-professional-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 px-6 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl border border-amber-200 dark:border-amber-600/30 shadow-professional"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Live Training Sessions</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
