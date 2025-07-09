
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-red-900 dark:to-red-800 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-red-100 leading-tight transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {translations.hero.title.split('CAD & Engineering').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && <span className="text-blue-600 dark:text-red-400">CAD & Engineering</span>}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-red-200 leading-relaxed transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {translations.hero.subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              {translations.hero.getStarted} <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-lg flex items-center gap-2 dark:border-red-500 dark:text-red-200 dark:hover:bg-red-800 transition-colors">
              <Play size={20} /> {translations.hero.watchDemo}
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-red-400">500+</div>
              <div className="text-sm text-gray-600 dark:text-red-300 transition-colors">{translations.hero.studentsCount}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-red-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-red-300 transition-colors">{translations.hero.coursesCount}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-red-400">95%</div>
              <div className="text-sm text-gray-600 dark:text-red-300 transition-colors">{translations.hero.successRate}</div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Video */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="relative w-full max-w-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="video-container border-8 border-white dark:border-red-700 rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-red-800 transition-colors">
              <video 
                className="w-full h-auto object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-red-500 dark:to-red-600 rounded-3xl -z-10 transition-colors"
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
