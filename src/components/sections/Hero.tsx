
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Settings, Code, Building2, Calculator, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();

  const floatingIcons = [
    { Icon: Settings, delay: 0.2, x: -20, y: -30, color: 'text-red-300' },
    { Icon: Code, delay: 0.4, x: 30, y: -20, color: 'text-red-200' },
    { Icon: Building2, delay: 0.6, x: -40, y: 20, color: 'text-red-400' },
    { Icon: Calculator, delay: 0.8, x: 40, y: 30, color: 'text-red-100' },
    { Icon: Sparkles, delay: 1.0, x: -60, y: -10, color: 'text-red-300' },
    { Icon: Star, delay: 1.2, x: 60, y: 10, color: 'text-red-200' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-rose-950">
      {/* Video Background with Enhanced Red Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="professional-media-frame h-full w-full">
          <video 
            className="w-full h-full object-cover opacity-30"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Enhanced Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/85 to-rose-900/90" />
        
        {/* Animated Red Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-300 rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Floating Icons with Red Theme */}
      {floatingIcons.map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{
            left: `${15 + (index * 12)}%`,
            top: `${25 + (index * 8)}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.8, 
            scale: 1,
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            delay,
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-sm rounded-2xl p-3 border border-red-400/30 shadow-lg shadow-red-500/20">
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="professional-container relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6">
        {/* Left Content */}
        <motion.div
          className="professional-spacing text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-red-400/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-4 h-4 text-red-300" />
            <span className="text-red-100 text-sm font-medium">Professional Excellence</span>
          </motion.div>

          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-8 text-left lg:text-left leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-red-200 via-red-100 to-rose-200 bg-clip-text text-transparent">
              Master Professional
            </span>
            <br />
            <span className="relative bg-gradient-to-r from-red-300 via-red-200 to-rose-300 bg-clip-text text-transparent">
              CAD & Engineering
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-red-100/90 leading-relaxed text-left max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Transform your career with industry-leading CAD, CAE, and software development training. 
            Join thousands of professionals who have advanced their skills with our comprehensive programs.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 group">
              Start Your Journey 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="border-2 border-red-400 text-red-100 bg-red-500/10 backdrop-blur-sm hover:bg-red-500/20 hover:border-red-300 font-semibold py-4 px-8 rounded-xl transition-all duration-300 group">
              <Play className="mr-2 w-5 h-5" /> 
              Watch Demo
            </Button>
          </motion.div>

          {/* Enhanced Stats with Red Theme */}
          <motion.div 
            className="grid grid-cols-3 gap-8 pt-16 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-transparent">500+</div>
              <div className="text-red-200/80 text-sm font-medium">Students Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-transparent">15+</div>
              <div className="text-red-200/80 text-sm font-medium">Expert Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-transparent">95%</div>
              <div className="text-red-200/80 text-sm font-medium">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Enhanced Media Frame */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative max-w-md w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glowing Red Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-red-800/50 to-red-900/50 backdrop-blur-sm rounded-2xl p-1 border border-red-400/30 shadow-2xl shadow-red-500/20">
              <video 
                className="w-full h-auto object-cover rounded-xl"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
              </video>
              
              {/* Enhanced Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-red-800/20 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-red-300 rounded-full flex justify-center backdrop-blur-sm bg-red-500/10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-red-300 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
