
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-red-900 dark:to-red-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 grid lg:grid-cols-2 gap-16 xl:gap-20 items-center max-w-7xl">
        {/* Left Content */}
        <motion.div
          className="space-y-8 lg:space-y-10 flex flex-col justify-center min-h-[600px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-red-100 leading-tight transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {translations.hero.title.split('CAD & Engineering').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && <span className="text-blue-600 dark:text-red-400 block lg:inline">CAD & Engineering</span>}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-red-200 leading-relaxed max-w-2xl transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {translations.hero.subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white px-10 py-4 text-lg rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              {translations.hero.getStarted} <ArrowRight size={24} />
            </Button>
            <Button variant="outline" className="px-10 py-4 text-lg rounded-xl flex items-center justify-center gap-3 dark:border-red-500 dark:text-red-200 dark:hover:bg-red-800 transition-all duration-300 border-2 hover:border-blue-600 dark:hover:border-red-400">
              <Play size={24} /> {translations.hero.watchDemo}
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-6 lg:gap-8 pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-red-800/30 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 dark:text-red-400">500+</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-red-300 transition-colors mt-2 font-medium">{translations.hero.studentsCount}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-red-800/30 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 dark:text-red-400">15+</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-red-300 transition-colors mt-2 font-medium">{translations.hero.coursesCount}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-red-800/30 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 dark:text-red-400">95%</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-red-300 transition-colors mt-2 font-medium">{translations.hero.successRate}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Video */}
        <motion.div
          className="flex justify-center lg:justify-end min-h-[600px] items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="relative w-full max-w-lg lg:max-w-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="video-container border-8 border-white dark:border-red-700 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-red-800 transition-colors">
              <video 
                className="w-full h-auto object-cover aspect-video"
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
              className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-red-500 dark:to-red-600 rounded-3xl -z-10 transition-colors opacity-30"
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
