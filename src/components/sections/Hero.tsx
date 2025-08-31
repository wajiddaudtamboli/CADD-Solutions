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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
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

        {/* Right Content - Phone Media Frame */}
        <motion.div 
          className="flex justify-center lg:justify-center order-first lg:order-last"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-xs mx-auto">
            {/* Phone Frame */}
            <motion.div 
              className="relative mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Device Frame Container */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl mx-auto" 
                   style={{ width: '280px', height: '560px' }}>
                {/* Screen Bezel */}
                <div className="relative bg-black rounded-[2rem] p-1 h-full shadow-inner">
                  {/* Screen Content */}
                  <div className="relative bg-background rounded-[1.8rem] h-full overflow-hidden flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-background px-6 py-2 flex justify-between items-center text-xs">
                      <span className="text-foreground font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-foreground/30 rounded-sm"></div>
                        <div className="w-6 h-2 bg-foreground/50 rounded-sm"></div>
                        <div className="w-6 h-2 bg-primary rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Navigation Bar Mock */}
                    <div className="bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/30">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                            <span className="text-white text-xs font-bold">C</span>
                          </div>
                          <span className="text-foreground font-semibold text-sm">CADD Solutions</span>
                        </div>
                        <div className="w-6 h-6 bg-muted rounded-md flex items-center justify-center">
                          <div className="w-3 h-0.5 bg-foreground rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="flex-1 p-4 space-y-4 overflow-hidden">
                      {/* Hero Section Mock */}
                      <div className="text-center space-y-2">
                        <h1 className="text-lg font-bold text-foreground leading-tight">
                          CAD & Engineering Excellence
                        </h1>
                        <p className="text-xs text-muted-foreground">Professional training solutions</p>
                      </div>
                      
                      {/* Services Cards Mock */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-primary/10 rounded-lg p-2 text-center">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-1"></div>
                          <span className="text-xs font-medium text-foreground">AutoCAD</span>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-2 text-center">
                          <div className="w-8 h-8 bg-accent/20 rounded-lg mx-auto mb-1"></div>
                          <span className="text-xs font-medium text-foreground">SolidWorks</span>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-2 text-center">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-1"></div>
                          <span className="text-xs font-medium text-foreground">CATIA</span>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-2 text-center">
                          <div className="w-8 h-8 bg-accent/20 rounded-lg mx-auto mb-1"></div>
                          <span className="text-xs font-medium text-foreground">Python</span>
                        </div>
                      </div>
                      
                      {/* Stats Mock */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="py-2">
                          <div className="text-sm font-bold text-primary">500+</div>
                          <div className="text-xs text-muted-foreground">Students</div>
                        </div>
                        <div className="py-2">
                          <div className="text-sm font-bold text-primary">15+</div>
                          <div className="text-xs text-muted-foreground">Courses</div>
                        </div>
                        <div className="py-2">
                          <div className="text-sm font-bold text-primary">95%</div>
                          <div className="text-xs text-muted-foreground">Success</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation Mock */}
                    <div className="bg-background/95 backdrop-blur-sm px-4 py-2 border-t border-border/30">
                      <div className="text-center">
                        <span className="text-xs text-muted-foreground">Crafted with ❤️ by Wajid Daud Tamboli</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full shadow-elegant"
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
                className="absolute -bottom-4 -left-4 w-5 h-5 bg-accent rounded-full shadow-elegant"
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
            
            {/* Glow Effect */}
            <motion.div 
              className="absolute -inset-6 rounded-3xl blur-xl -z-10"
              style={{ background: 'var(--gradient-primary)', opacity: 0.3 }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2] 
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