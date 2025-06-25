
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What courses do you offer?",
      answer: "We offer comprehensive training in CAD (AutoCAD, SolidWorks, CATIA), CAM, CAE (ANSYS), Civil (Revit, Civil 3D), and Software Development (Python, Java, Machine Learning). All courses are designed to meet current industry standards."
    },
    {
      question: "How long are the courses?",
      answer: "Course duration varies from 2 to 4 months depending on the complexity and depth of the subject. We offer flexible timing with morning, evening, and weekend batches to accommodate different schedules."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we have a dedicated placement cell that helps students with job opportunities. We maintain strong relationships with industry partners and have achieved a 95% placement rate for our graduates."
    },
    {
      question: "What are the prerequisites for joining?",
      answer: "Most of our courses require basic computer knowledge. For engineering courses, a technical background is preferred but not mandatory. We provide foundation modules for beginners to ensure everyone can succeed."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both online and offline classes. Our online sessions are interactive with live projects, recorded sessions for revision, and dedicated support for remote learners."
    },
    {
      question: "What certificates do you provide?",
      answer: "We provide industry-recognized certificates upon course completion. These certificates are valued by employers and include detailed skill assessments and project portfolios."
    },
    {
      question: "Can I get a demo class?",
      answer: "Absolutely! We encourage prospective students to attend a free demo class to understand our teaching methodology and course content before enrollment."
    },
    {
      question: "What is your fee structure?",
      answer: "Our fees are competitive and vary by course. We offer flexible payment options, installment plans, and special discounts for students and bulk enrollments. Contact us for detailed fee information."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials including course notes, practice exercises, project files, and access to our online learning portal with additional resources."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to the most common questions about our courses and services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-transparent hover:border-red-200 dark:hover:border-blue-400 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-red-600 dark:text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-600 dark:text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? 'auto' : 0,
                      opacity: openItems.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-red-100 dark:text-blue-100 mb-6">
                Our team is here to help you find the perfect course for your career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919689044025"
                  className="bg-white text-red-600 dark:text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Call Us: +91 96890 44025
                </a>
                <a
                  href="mailto:tambolimahibub@gmail.com"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
