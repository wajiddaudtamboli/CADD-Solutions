
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Settings, Code, Building2, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();

  const floatingIcons = [
    { Icon: Settings, delay: 0.2, x: -20, y: -30 },
    { Icon: Code, delay: 0.4, x: 30, y: -20 },
    { Icon: Building2, delay: 0.6, x: -40, y: 20 },
    { Icon: Calculator, delay: 0.8, x: 40, y: 30 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="professional-media-frame h-full w-full">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 dark:from-background/95 dark:via-background/80 dark:to-background/95" />
      </div>

      {/* Floating CAD Tools Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${30 + (index * 10)}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            x: [0, x, 0],
            y: [0, y, 0],
          }}
          transition={{ 
            delay,
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="professional-icon-small">
            <Icon className="w-4 h-4 text-primary-foreground" />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="professional-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="professional-spacing text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="professional-heading text-left lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Master Professional{' '}
            <span className="relative">
              CAD & Engineering
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="professional-text text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transform your career with industry-leading CAD, CAE, and software development training. 
            Join thousands of professionals who have advanced their skills with our comprehensive programs.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="professional-button group">
              Start Your Journey 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="professional-button-outline group">
              <Play className="mr-2 w-5 h-5" /> 
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="professional-grid-3 pt-12 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="professional-spacing-sm">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="professional-spacing-sm">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Expert Courses</div>
            </div>
            <div className="professional-spacing-sm">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Featured Media */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="professional-media-frame max-w-md w-full hover-scale hover-glow"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <video 
              className="w-full h-auto object-cover rounded-lg"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
            </video>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
