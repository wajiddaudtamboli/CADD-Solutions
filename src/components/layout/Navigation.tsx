import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/ui/language-selector';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    translations
  } = useLanguage();
  const navigate = useNavigate();
  const navItems = [{
    name: translations.nav.home,
    href: '#home',
    route: '/'
  }, {
    name: translations.nav.services,
    href: '#services',
    route: '/'
  }, {
    name: translations.nav.products,
    href: '#products',
    route: '/'
  }, {
    name: translations.nav.projects,
    href: '#projects',
    route: '/'
  }, {
    name: translations.nav.contact,
    href: '#contact',
    route: '/'
  }];
  const handleNavClick = (item: any) => {
    if (item.route !== '/') {
      navigate(item.route);
    } else if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300" style={{
    height: 'clamp(60px, 8vh, 80px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)'
  }} initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }}>
      <div className="container mx-auto px-4 sm:px-6 h-full relative">
        <div className="flex items-center justify-between h-full">
          
          {/* Corner Toggle Menu */}
          <motion.div className="fixed top-4 right-4 z-[60]" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            

            {/* Dropdown Menu with Media Frame */}
            <motion.div className="absolute top-16 right-0 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden" initial={{
            opacity: 0,
            y: -20,
            scale: 0.95
          }} animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
            scale: isOpen ? 1 : 0.95,
            pointerEvents: isOpen ? "auto" : "none"
          }} transition={{
            duration: 0.3,
            ease: "easeOut"
          }}>
              {/* Media Frame Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">CADD Solutions</h3>
                    <p className="text-white/80 text-sm">Navigation Menu</p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => <motion.button key={item.name} onClick={() => handleNavClick(item)} className="w-full text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 flex items-center space-x-3" initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.05,
                duration: 0.3
              }} whileHover={{
                x: 5
              }}>
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>{item.name}</span>
                  </motion.button>)}
              </div>

              {/* Quick Actions */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <motion.a href="tel:+919689044025" className="flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors group" whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Phone size={20} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </motion.a>
                  
                  <motion.a href="mailto:tambolimahibub@gmail.com" className="flex items-center justify-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors group" whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Mail size={20} className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </div>

              {/* Settings */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Settings</span>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" onClick={() => navigate('/admin')} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <Shield size={18} />
                    </Button>
                    <ThemeToggle />
                    <LanguageSelector />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Logo */}
          <motion.div className="flex items-center space-x-3 cursor-pointer group" whileHover={{
          scale: 1.02
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }} onClick={() => navigate('/')}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-xl tracking-wide">C</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-300">
              CADD Solutions
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => <motion.button key={item.name} onClick={() => handleNavClick(item)} className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 group" whileHover={{
            y: -1
          }} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }}>
                {item.name}
                <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" initial={{
              width: 0
            }} whileHover={{
              width: "100%"
            }} transition={{
              duration: 0.3
            }} />
              </motion.button>)}
            
            <motion.div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-300 dark:border-gray-600" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.5
          }}>
              <motion.a href="tel:+919689044025" className="p-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                <Phone size={20} />
              </motion.a>
              <motion.a href="mailto:tambolimahibub@gmail.com" className="p-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                <Mail size={20} />
              </motion.a>
              
              <Button variant="ghost" size="sm" onClick={() => navigate('/admin')} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <Shield size={20} />
              </Button>
              
              <ThemeToggle />
              <LanguageSelector />
            </motion.div>
          </div>

        </div>
      </div>
    </motion.nav>;
};
export default Navigation;