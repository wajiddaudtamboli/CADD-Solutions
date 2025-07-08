
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <>
      <footer className="bg-gray-900 text-white py-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold">{translations.footer.company}</span>
              </div>
              <p className="text-gray-300">
                {translations.footer.description}
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer transition-colors" />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">{translations.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">{translations.nav.home}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{translations.nav.services}</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">{translations.nav.products}</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">{translations.nav.projects}</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{translations.nav.contact}</a></li>
              </ul>
            </motion.div>

            {/* Popular Courses */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">{translations.footer.popularCourses}</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">AutoCAD</li>
                <li className="text-gray-300">Python & ML</li>
                <li className="text-gray-300">SolidWorks</li>
                <li className="text-gray-300">CATIA</li>
                <li className="text-gray-300">ANSYS</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">{translations.footer.contactInfo}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Solapur: Saat Rasta, Solapur - 413001</p>
                    <p>Karad: Mangalwar Peth, Karad - 415110</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div className="text-gray-300 text-sm">
                    <p>+91 96890 44025</p>
                    <p>+91 77220 82626</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300 text-sm">tambolimahibub@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-gray-800 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">
              © 2024 CADD Solutions. {translations.footer.rights}
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Custom Developer Footer */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{
          width: '100%',
          padding: '10px 0',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          fontSize: '1.4rem',
          fontWeight: '600',
          boxShadow: '0px -2px 12px rgba(0, 0, 0, 0.5)',
        }}
      >
        Developer - <strong style={{ color: '#ffcc00', fontWeight: '800', letterSpacing: '1px' }}>Wajid Daud Tamboli</strong>
      </div>
    </>
  );
};

export default Footer;
