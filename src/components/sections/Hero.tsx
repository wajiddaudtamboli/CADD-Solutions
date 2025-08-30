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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10 transition-colors duration-500 relative overflow-hidden"
      style={{ paddingTop: 'clamp(80px, 12vh, 120px)' }}
    >
      {/* Background Effects - Optimized for mobile */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/6 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="container grid lg:grid-cols-2 gap-6 lg:gap-12 items-center px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl mx-auto">
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
          <motion.h1 className="professional-heading" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
            {translations.hero.title.split('CAD & Engineering').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && (
                  <span 
                    className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient" 
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    CAD & Engineering
                  </span>
                )}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="professional-text text-xl lg:text-2xl" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: translations.hero.subtitle }}
          />

          <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }}>
            <Button className="professional-button group">
              <span className="relative z-10">{translations.hero.getStarted}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-4 rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
              <Play size={20} className="group-hover:scale-110 transition-transform" /> 
              {translations.hero.watchDemo}
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
              <div className="professional-stats">500+</div>
              <div className="text-sm opacity-80">{translations.hero.studentsCount}</div>
            </div>
            <div className="text-center">
              <div className="professional-stats">15+</div>
              <div className="text-sm opacity-80">{translations.hero.coursesCount}</div>
            </div>
            <div className="text-center">
              <div className="professional-stats">95%</div>
              <div className="text-sm opacity-80">{translations.hero.successRate}</div>
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
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Mobile-Optimized Device Frame */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02, rotateY: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Device Frame Container - Mobile First */}
              <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[16px] sm:rounded-[20px] p-1.5 sm:p-2 shadow-2xl">
                {/* Screen Bezel */}
                <div className="relative bg-black rounded-[12px] sm:rounded-[16px] p-1 sm:p-1.5 shadow-inner">
                  {/* Screen Content */}
                  <div className="relative bg-gradient-to-br from-background to-muted rounded-[8px] sm:rounded-[12px] aspect-[9/16] sm:aspect-[9/19.5] overflow-hidden">
                    {/* Media Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10">
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover rounded-[8px] sm:rounded-[12px]"
                        poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=800&fit=crop"
                      >
                        <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Play Button Overlay */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="bg-card/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-elegant">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary ml-0.5" fill="currentColor" />
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                
                {/* Device Base/Power Button */}
                <div className="absolute right-0 top-1/4 w-0.5 h-8 bg-gray-600 rounded-l-sm" />
                <div className="absolute right-0 top-1/3 w-0.5 h-12 bg-gray-600 rounded-l-sm" />
              </div>
              
              {/* Floating Elements - Scaled for mobile */}
              <motion.div 
                className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full shadow-elegant animate-float"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-3 -left-3 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full shadow-elegant animate-float"
                animate={{ 
                  x: [0, 8, 0],
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
            
            {/* Glow Effect - Optimized */}
            <motion.div 
              className="absolute -inset-4 sm:-inset-6 rounded-3xl blur-xl -z-10 animate-pulse-glow"
              style={{ background: 'var(--gradient-primary)' }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;