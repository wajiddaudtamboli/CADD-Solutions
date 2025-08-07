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
  return <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 transition-all duration-300" style={{
    height: 'clamp(64px, 10vh, 72px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full relative">
        <div className="flex items-center justify-between h-full">
          {/* Mobile-First Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 right-4 z-[60] w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={20} className="text-gray-700 dark:text-gray-300" /> : <Menu size={20} className="text-gray-700 dark:text-gray-300" />}
            </motion.div>
          </motion.button>

          {/* Mobile-Optimized Dropdown Menu */}
          <motion.div 
            className="fixed inset-x-4 top-20 z-[50] bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden max-w-sm mx-auto"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -20,
              scale: isOpen ? 1 : 0.95,
              pointerEvents: isOpen ? "auto" : "none"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Mobile Header */}
            <div className="p-4" style={{ background: 'var(--gradient-primary)' }}>
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
              {navItems.map((item, index) => (
                <motion.button 
                  key={item.name} 
                  onClick={() => handleNavClick(item)} 
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary font-medium transition-all duration-300 flex items-center space-x-3 active:scale-95"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <motion.a 
                  href="tel:+919689044025" 
                  className="flex items-center justify-center p-3 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={20} className="text-primary group-hover:scale-110 transition-transform" />
                </motion.a>
                
                <motion.a 
                  href="mailto:tambolimahibub@gmail.com" 
                  className="flex items-center justify-center p-3 bg-accent/10 rounded-xl hover:bg-accent/20 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* Settings */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Settings</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate('/admin')} 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary p-2 rounded-lg"
                >
                  <Shield size={18} />
                </Button>
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
          {/* Logo - Mobile Optimized */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group" 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-white font-bold text-lg sm:text-xl tracking-wide">C</span>
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-300 hidden xs:block">
              CADD Solutions
            </span>
          </motion.div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button 
                key={item.name} 
                onClick={() => handleNavClick(item)} 
                className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-all duration-300 group"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {item.name}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 rounded-full"
                  style={{ background: 'var(--gradient-primary)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            <motion.div 
              className="flex items-center space-x-2 ml-4 pl-4 border-l border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a 
                href="tel:+919689044025" 
                className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
              </motion.a>
              <motion.a 
                href="mailto:tambolimahibub@gmail.com" 
                className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/admin')} 
                className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              >
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