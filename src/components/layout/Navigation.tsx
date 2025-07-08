
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Shield, Home, Briefcase, Package, FolderOpen, Award, MessageSquare, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/ui/language-selector';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = useLanguage();
  const navigate = useNavigate();

  const navItems = [
    { name: translations.nav.home, href: '#home', route: '/', icon: Home },
    { name: translations.nav.services, href: '#services', route: '/', icon: Briefcase },
    { name: translations.nav.products, href: '#products', route: '/', icon: Package },
    { name: translations.nav.projects, href: '#projects', route: '/', icon: FolderOpen },
    { name: 'Scholarship', href: '/scholarship', route: '/scholarship', icon: GraduationCap },
    { name: translations.nav.contact, href: '#contact', route: '/', icon: MessageSquare },
  ];

  const handleNavClick = (item: any) => {
    if (item.route !== '/') {
      navigate(item.route);
    } else if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg lg:text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                CADD Solutions
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="group relative px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.a
              href="tel:+919689044025"
              className="p-2 rounded-xl text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
            </motion.a>
            <motion.a
              href="mailto:tambolimahibub@gmail.com"
              className="p-2 rounded-xl text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/admin')}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <Shield size={20} />
            </Button>
            
            <div className="flex items-center space-x-2 pl-2 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button and Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/admin')}
              className="p-2 text-gray-600 dark:text-gray-400"
            >
              <Shield size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200/20 dark:border-gray-700/20">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="flex items-center space-x-3 w-full text-left py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </motion.button>
                ))}
                
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                  <motion.a
                    href="tel:+919689044025"
                    className="p-3 rounded-full bg-amber-500 text-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={18} />
                  </motion.a>
                  <motion.a
                    href="mailto:tambolimahibub@gmail.com"
                    className="p-3 rounded-full bg-amber-500 text-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
