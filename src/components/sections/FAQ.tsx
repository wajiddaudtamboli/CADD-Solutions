
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown, Phone, Mail, MessageCircle, HelpCircle, BookOpen, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What professional training courses do you offer?",
      answer: "We offer comprehensive training in CAD (AutoCAD, SolidWorks, CATIA), CAM, CAE (ANSYS), Civil (Revit, Civil 3D), and Software Development (Python, Java, Machine Learning). All courses are industry-aligned with hands-on experience.",
      category: "Courses",
      icon: BookOpen
    },
    {
      question: "What is the duration of your training programs?",
      answer: "Course duration varies from 2 to 4 months depending on complexity. We offer flexible timing with morning, evening, and weekend batches for working professionals and students.",
      category: "Duration",
      icon: Award
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we have a dedicated placement cell with strong industry connections. We maintain partnerships with leading companies and have achieved a 95% placement rate with complete career support.",
      category: "Career",
      icon: Users
    },
    {
      question: "What are the prerequisites for enrollment?",
      answer: "Most courses require basic computer knowledge and technical aptitude. For engineering courses, a technical background is preferred but not mandatory. We provide foundation modules for all students.",
      category: "Requirements",
      icon: HelpCircle
    },
    {
      question: "Do you offer online and offline training modes?",
      answer: "Yes, we provide both online and offline training with interactive sessions, live projects, recorded sessions for revision, and dedicated support maintaining the same quality standards.",
      category: "Format",
      icon: MessageCircle
    },
    {
      question: "What certifications do you provide?",
      answer: "We provide industry-recognized certificates upon successful completion. These include detailed skill assessments, project portfolios, and are accredited by leading software companies.",
      category: "Certification",
      icon: Award
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="bg-gradient-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="icon-container mx-auto">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="heading-secondary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lead mb-8">
            Get comprehensive answers to the most common questions about our professional training programs
          </p>
          <div className="flex items-center justify-center gap-3 text-amber-600 dark:text-amber-400">
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg font-semibold">Quick answers to help you get started</span>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="card-modern hover-lift border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-600">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 lg:p-8 text-left flex items-start justify-between hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/50 dark:hover:from-gray-700/30 dark:hover:to-gray-600/30 transition-all duration-300 rounded-2xl group"
                    aria-expanded={openItems.includes(index)}
                  >
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-container-sm">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 text-sm font-semibold rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-200 leading-relaxed">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <motion.div
                        animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 group-hover:from-amber-200 dark:group-hover:from-amber-800/40 transition-colors duration-200"
                      >
                        <ChevronDown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                          <div className="h-px bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 dark:from-amber-600 dark:via-orange-600 dark:to-amber-600 mb-6"></div>
                          <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-body ml-20 pl-6 border-l-4 border-gradient-to-b from-amber-400 to-orange-500"
                            style={{ borderImage: 'linear-gradient(to bottom, #f59e0b, #ea580c) 1' }}
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white max-w-5xl mx-auto shadow-elegant-lg border-0">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
            
            <CardContent className="relative z-10 p-8 lg:p-16 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="icon-container mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-600">
                  <MessageCircle className="w-8 h-8" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Still have questions?
              </h3>
              <p className="text-blue-100 mb-10 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                Our professional team of education consultants is here to help you find the perfect training program for your career advancement. Get personalized guidance today!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.a
                  href="tel:+919689044025"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3 shadow-elegant hover-glow"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Call: +91 96890 44025
                </motion.a>
                <motion.a
                  href="mailto:tambolimahibub@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-elegant"
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  Email Us
                </motion.a>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <p className="text-blue-100/80 text-sm lg:text-base">
                  💡 Professional tip: Schedule a free consultation call to discuss your career goals and get a customized learning path
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
