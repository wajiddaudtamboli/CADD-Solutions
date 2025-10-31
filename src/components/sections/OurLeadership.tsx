import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const OurLeadership = () => {
  const { translations } = useLanguage();

  const leaders = [
    {
      id: 1,
      name: translations.leadership?.leaders?.[0]?.name || "Mahibub Tamboli",
      role: translations.leadership?.leaders?.[0]?.role || "CEO & HR",
      organization: translations.leadership?.leaders?.[0]?.organization || "CADD Solutions",
      image: "https://res.cloudinary.com/duhhsnbwh/image/upload/v1761891151/WhatsApp_Image_2025-10-31_at_11.29.05_74a79231_h3qlo8.jpg",
      phone: "+91 7722082626",
      description: translations.leadership?.leaders?.[0]?.description || "Visionary leader driving excellence in technical education"
    },
    {
      id: 2,
      name: translations.leadership?.leaders?.[1]?.name || "Mujahid Fulmamadi",
      role: translations.leadership?.leaders?.[1]?.role || "Manager",
      organization: translations.leadership?.leaders?.[1]?.organization || "CADD Solutions",
      image: "https://res.cloudinary.com/duhhsnbwh/image/upload/v1761891158/WhatsApp_Image_2025-10-31_at_11.30.05_bfa16e40_u0jjgj.jpg",
      phone: "+91 9689044025",
      description: translations.leadership?.leaders?.[1]?.description || "Experienced manager ensuring operational excellence"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75] as const
      }
    }
  };

  return (
    <section 
      id="leadership" 
      className="py-8 lg:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="professional-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="professional-section"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <h2 className="professional-heading">
            {translations.leadership?.title || "Our Leadership"}
          </h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          <p className="professional-text max-w-3xl mx-auto text-gray-700 dark:text-gray-200">
            {translations.leadership?.subtitle || "Meet the visionary leaders who drive our mission of excellence in technical education and innovation."}
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-white/20 dark:border-gray-700/20 relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Profile Image */}
                <motion.div
                  className="relative mb-6 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Image Glow Ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-xl relative z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Professional Badge */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-accent p-2 rounded-full shadow-lg z-20"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Users className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Leader Info */}
                <div className="text-center relative z-10">
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {leader.name}
                  </motion.h3>

                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg font-semibold text-primary mb-1">
                      {leader.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {leader.organization}
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {leader.description}
                  </motion.p>

                  {/* Contact Info */}
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={`tel:${leader.phone}`}
                      className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/phone"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-4 h-4 group-hover/phone:animate-bounce" />
                      <span className="text-sm">{leader.phone}</span>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10">
                  <div className="w-8 h-8 border-2 border-primary rounded-full" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-10">
                  <div className="w-6 h-6 bg-accent rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            {translations.leadership?.bottomText || "Together, our leadership team brings decades of experience in technical education, industry expertise, and a shared commitment to student success."}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLeadership;