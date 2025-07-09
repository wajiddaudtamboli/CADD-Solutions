
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SlidingFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { translations } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Main Footer Content */}
      <motion.footer 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-gray-900 text-white shadow-2xl transition-all duration-300 ${
          isExpanded ? 'h-auto max-h-[70vh] overflow-y-auto' : 'h-16'
        }`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Toggle Button */}
        <div 
          className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-800 transition-colors"
          onClick={toggleExpanded}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-sm md:text-base">CADD Solutions</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Quick Contact Icons */}
            <div className="hidden sm:flex items-center space-x-2">
              <a href="tel:+919689044025" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Phone size={16} />
              </a>
              <a href="mailto:tambolimahibub@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Mail size={16} />
              </a>
            </div>
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp size={20} />
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-800 overflow-hidden"
            >
              <div className="px-4 py-6">
                <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-4'}`}>
                  {/* Company Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">About Us</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Professional CAD & Engineering training institute providing industry-standard courses.
                    </p>
                    <div className="flex space-x-3">
                      <Facebook className="w-4 h-4 hover:text-blue-500 cursor-pointer transition-colors" />
                      <Twitter className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                      <Linkedin className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                      <Instagram className="w-4 h-4 hover:text-pink-500 cursor-pointer transition-colors" />
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                      <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                      <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                      <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                      <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                  </div>

                  {/* Popular Courses */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Popular Courses</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-300">AutoCAD</li>
                      <li className="text-gray-300">Python & ML</li>
                      <li className="text-gray-300">SolidWorks</li>
                      <li className="text-gray-300">CATIA</li>
                      <li className="text-gray-300">ANSYS</li>
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Contact Info</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div className="text-gray-300">
                          <p>Solapur: Saat Rasta, Solapur - 413001</p>
                          <p>Karad: Mangalwar Peth, Karad - 415110</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <div className="text-gray-300">
                          <p>+91 96890 44025</p>
                          <p>+91 77220 82626</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-400" />
                        <p className="text-gray-300">tambolimahibub@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-6 pt-4 text-center">
                  <p className="text-gray-400 text-sm">
                    © 2024 CADD Solutions. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.footer>

      {/* Developer Credit */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-30"
        style={{
          width: '100%',
          padding: '8px 0',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          fontSize: isMobile ? '0.8rem' : '1rem',
          fontWeight: '600',
          transform: isExpanded ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        Developer - <strong style={{ color: '#ffcc00', fontWeight: '800', letterSpacing: '1px' }}>Wajid Daud Tamboli</strong>
      </div>
    </>
  );
};

export default SlidingFooter;
