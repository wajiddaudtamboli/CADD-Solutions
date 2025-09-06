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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10 transition-colors duration-500 relative overflow-hidden w-full"
      style={{ paddingTop: 'clamp(80px, 12vh, 120px)', marginBottom: 0, paddingBottom: 'clamp(40px, 8vh, 80px)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight mb-8" initial={{
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
                    className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient block" 
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    CAD & Engineering Skills
                  </span>
                )}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center lg:text-left max-w-4xl mx-auto lg:mx-0 mb-8" 
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
          <div className="relative w-full max-w-lg">
            {/* Laptop Frame */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Device Frame Container */}
              <div className="professional-media-frame">
                {/* Screen Bezel */}
                <div className="relative bg-black rounded-xl p-3 shadow-inner">
                  {/* Screen Content */}
                  <div className="relative bg-gradient-to-br from-background to-muted rounded-lg aspect-video overflow-hidden">
                    {/* Media Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10">
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover rounded-lg"
                        poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                      >
                        <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Play Button Overlay */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-card/90 backdrop-blur-sm rounded-full p-4 shadow-elegant">
                          <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
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
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full shadow-elegant animate-float"
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
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full shadow-elegant animate-float"
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
              className="absolute -inset-8 rounded-3xl blur-xl -z-10 animate-pulse-glow"
              style={{ background: 'var(--gradient-primary)' }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10 -z-20" style={{ background: 'var(--gradient-hero)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;