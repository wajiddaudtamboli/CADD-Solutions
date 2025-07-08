import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Users, BookOpen, Zap, Shield, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
const Hero = () => {
  const {
    translations
  } = useLanguage();
  return <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40"></div>
      <motion.div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-3xl" animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }} />
      <motion.div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl" animate={{
      scale: [1.2, 1, 1.2],
      rotate: [360, 180, 0]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }} />
      
      <div className="section-container relative z-10 pt-20 bg-pink-100">
        <div className="grid-responsive grid-2 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div className="space-y-8 text-center lg:text-left" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full border border-amber-200 dark:border-amber-600/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Premium Training Institute</span>
              </div>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 className="heading-primary text-center lg:text-left" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }}>
              Master Professional <br />
              <span className="relative">
                Engineering Skills
                <motion.div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                delay: 1,
                duration: 0.8
              }} />
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p className="text-lead text-center lg:text-left" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }}>
              Transform your career with industry-leading training in CAD, CAM, CAE, Civil Engineering, and Software Development. Join thousands of successful professionals.
            </motion.p>

            {/* Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }}>
              <Button className="btn-primary group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-8 pt-12" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9
          }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                  <Users className="w-4 h-4" />
                  Students
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">15+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                  <BookOpen className="w-4 h-4" />
                  Courses
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">95%</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                  <Award className="w-4 h-4" />
                  Success Rate
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Media Frame */}
          <motion.div className="flex justify-center order-first lg:order-last" initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <div className="relative w-full max-w-lg">
              {/* Main Media Frame */}
              <motion.div className="media-frame hover-lift group cursor-pointer" whileHover={{
              scale: 1.02
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" autoPlay muted loop playsInline>
                  <source src="/imgs/portfolio/watermark.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-elegant-lg" animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}>
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-elegant" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 1.2
            }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Live Training</span>
                </div>
              </motion.div>

              <motion.div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-elegant" animate={{
              y: [-10, 10, -10]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;