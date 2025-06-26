
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Phone, Mail, MessageCircle, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What professional training courses do you offer?",
      answer: "We offer comprehensive training in CAD (AutoCAD, SolidWorks, CATIA), CAM, CAE (ANSYS), Civil (Revit, Civil 3D), and Software Development (Python, Java, Machine Learning). All courses are designed to meet current industry standards with hands-on practical experience.",
      category: "Courses"
    },
    {
      question: "What is the duration of your training programs?",
      answer: "Course duration varies from 2 to 4 months depending on the complexity and depth of the subject. We offer flexible timing with morning, evening, and weekend batches to accommodate working professionals and students.",
      category: "Duration"
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we have a dedicated placement cell with strong industry connections. We maintain partnerships with leading companies and have achieved a 95% placement rate for our graduates. Our career support includes resume building, interview preparation, and job referrals.",
      category: "Career"
    },
    {
      question: "What are the prerequisites for enrollment?",
      answer: "Most courses require basic computer knowledge and technical aptitude. For engineering courses, a technical background is preferred but not mandatory. We provide foundation modules and orientation sessions to ensure all students can succeed.",
      category: "Requirements"
    },
    {
      question: "Do you offer online and offline training modes?",
      answer: "Yes, we provide both online and offline training methods. Our online sessions are interactive with live projects, recorded sessions for revision, virtual labs, and dedicated support for remote learners with the same quality as classroom training.",
      category: "Format"
    },
    {
      question: "What certifications do you provide?",
      answer: "We provide industry-recognized certificates upon successful course completion. These certificates are valued by employers and include detailed skill assessments, project portfolios, and are accredited by leading software companies.",
      category: "Certification"
    },
    {
      question: "Can I attend a demonstration class?",
      answer: "Absolutely! We encourage prospective students to attend a free demonstration class to understand our teaching methodology, course content, and facility infrastructure before making an enrollment decision.",
      category: "Demo"
    },
    {
      question: "What is your fee structure and payment options?",
      answer: "Our fees are competitive and transparent with no hidden costs. We offer flexible payment options including installment plans, education loans, and special discounts for students, bulk enrollments, and early bird registrations.",
      category: "Payment"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="heading-secondary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lead mb-4">
            Get comprehensive answers to the most common questions about our professional training programs
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
            <MessageCircle className="w-5 h-5" />
            <span className="text-lg font-medium">Quick answers to help you get started</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="card-modern border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-600 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 md:p-8 text-left flex items-start justify-between hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/50 dark:hover:from-gray-700/30 dark:hover:to-gray-600/30 transition-all duration-300 rounded-2xl group"
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-content-${index}`}
                  >
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-200">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <motion.div
                        animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40 transition-colors duration-200"
                      >
                        <ChevronDown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        id={`faq-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                          <div className="h-px bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600 mb-6"></div>
                          <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg pl-4 border-l-4 border-amber-300 dark:border-amber-600"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white max-w-4xl mx-auto shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <CardContent className="relative z-10 p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                Still have questions?
              </h3>
              <p className="text-amber-100 mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Our professional team of education consultants is here to help you find the perfect training program for your career advancement. Get personalized guidance today!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="tel:+919689044025"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Call: +91 96890 44025
                </motion.a>
                <motion.a
                  href="mailto:tambolimahibub@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  Email Us
                </motion.a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  💡 Pro tip: Schedule a free consultation call to discuss your career goals
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
