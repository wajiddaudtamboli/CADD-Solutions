
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <>
      <motion.footer
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        style={{
          paddingTop: 'clamp(24px, 4vh, 48px)',
          paddingBottom: 'clamp(72px, 10vh, 96px)',
          marginBottom: 'clamp(56px, 8vh, 64px)'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="max-w-5xl mx-auto px-3 sm:px-4 flex flex-col items-center justify-center text-center" style={{ paddingLeft: 'env(safe-area-inset-left)', paddingRight: 'env(safe-area-inset-right)' }}>
          {/* Company Logo & Info - Centered */}
          <motion.div
            className="flex flex-col items-center space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609576/caddsolutionlogo_ogmant.png"
                  alt="CADD Solutions Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-2xl font-bold">{translations.footer.company}</span>
            </div>
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              {translations.footer.description}
            </p>
            <div className="flex space-x-6">
              <Facebook className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-blue-600 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </motion.div>

          {/* Contact Information - Centered */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Address */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Our Locations</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Solapur: Saat Rasta, Solapur - 413001</p>
                <p>Karad: Mangalwar Peth, Karad - 415110</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Call Us</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <motion.a 
                  href="tel:+919689044025" 
                  className="block hover:text-green-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +91 96890 44025
                </motion.a>
                <motion.a 
                  href="tel:+917722082626" 
                  className="block hover:text-green-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +91 77220 82626
                </motion.a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Email Us</h3>
              <p className="text-gray-300 text-sm">tambolimahibub@gmail.com</p>
            </div>
          </motion.div>

          {/* Quick Links & Courses - Centered */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Quick Links */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold">{translations.footer.quickLinks}</h3>
              <ul className="space-y-2 text-center">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">{translations.nav.home}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{translations.nav.services}</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">{translations.nav.products}</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">{translations.nav.projects}</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{translations.nav.contact}</a></li>
              </ul>
            </div>

            {/* Popular Courses */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold">{translations.footer.popularCourses}</h3>
              <ul className="space-y-2 text-center">
                <li className="text-gray-300">AutoCAD</li>
                <li className="python-training-text">Python Training & ML</li>
                <li className="text-gray-300">SolidWorks</li>
                <li className="text-gray-300">CATIA</li>
                <li className="text-gray-300">ANSYS</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8 w-full text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">
              © 2025 CADD Solutions. {translations.footer.rights}
            </p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Mobile-Optimized Developer Footer */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 text-white border-t border-gray-700/50 backdrop-blur-xl"
        style={{
          height: 'clamp(48px, 6vh, 56px)',
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.2), 0 -1px 3px rgba(0, 0, 0, 0.3)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)'
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center h-full px-2 sm:px-3">
          <motion.a
            href="https://tech-world-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-2 text-center cursor-pointer"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gray-300 font-medium text-xs sm:text-sm">
              Developer -
            </span>
            <motion.span
              className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-bold text-xs sm:text-base tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Wajid Daud Tamboli
            </motion.span>
          </motion.a>
        </div>

        {/* Animated bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5"
          style={{ background: 'var(--gradient-primary)' }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  );
};

export default Footer;
