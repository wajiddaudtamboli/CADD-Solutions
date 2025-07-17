import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
const Hero = () => {
  const {
    translations
  } = useLanguage();
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
      style={{ paddingTop: 'clamp(80px, 12vh, 120px)' }}
    >
      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div className="space-y-6" initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.h1 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-red-100 leading-tight transition-colors" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
            {translations.hero.title.split('CAD & Engineering').map((part, index) => <span key={index}>
                {part}
                {index === 0 && <span className="text-blue-600 dark:text-red-400">CAD & Engineering</span>}
              </span>)}
          </motion.h1>
          
          <motion.p className="text-xl text-gray-600 dark:text-red-200 leading-relaxed transition-colors" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }}>
            {translations.hero.subtitle}
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }}>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              {translations.hero.getStarted} <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-lg flex items-center gap-2 dark:border-red-500 dark:text-red-200 dark:hover:bg-red-800 transition-colors">
              <Play size={20} /> {translations.hero.watchDemo}
            </Button>
          </motion.div>

          <motion.div className="grid grid-cols-3 gap-6 pt-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }}>
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
          </motion.div>
        </motion.div>

        {/* Right Content - Enhanced Media Frame */}
        <motion.div 
          className="flex justify-center lg:justify-end order-first lg:order-last"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-lg">
            {/* Laptop Frame */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Device Frame Container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
                {/* Screen Bezel */}
                <div className="relative bg-black rounded-lg p-2 shadow-inner">
                  {/* Screen Content */}
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-md aspect-video overflow-hidden">
                    {/* Media Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                      >
                        <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Play Button Overlay */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-white/90 rounded-full p-4 shadow-lg">
                          <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                
                {/* Laptop Base */}
                <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl shadow-lg" />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5 
                }}
              />
            </motion.div>
            
            {/* Glow Effect */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] -z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;