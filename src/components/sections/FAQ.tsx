
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What professional training courses do you offer?",
      answer: "We offer comprehensive training in CAD (AutoCAD, SolidWorks, CATIA), CAM, CAE (ANSYS), Civil (Revit, Civil 3D), and Software Development (Python, Java, Machine Learning). All courses are designed to meet current industry standards with hands-on practical experience."
    },
    {
      question: "What is the duration of your training programs?",
      answer: "Course duration varies from 2 to 4 months depending on the complexity and depth of the subject. We offer flexible timing with morning, evening, and weekend batches to accommodate working professionals and students."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we have a dedicated placement cell with strong industry connections. We maintain partnerships with leading companies and have achieved a 95% placement rate for our graduates. Our career support includes resume building, interview preparation, and job referrals."
    },
    {
      question: "What are the prerequisites for enrollment?",
      answer: "Most courses require basic computer knowledge and technical aptitude. For engineering courses, a technical background is preferred but not mandatory. We provide foundation modules and orientation sessions to ensure all students can succeed."
    },
    {
      question: "Do you offer online and offline training modes?",
      answer: "Yes, we provide both online and offline training methods. Our online sessions are interactive with live projects, recorded sessions for revision, virtual labs, and dedicated support for remote learners with the same quality as classroom training."
    },
    {
      question: "What certifications do you provide?",
      answer: "We provide industry-recognized certificates upon successful course completion. These certificates are valued by employers and include detailed skill assessments, project portfolios, and are accredited by leading software companies."
    },
    {
      question: "Can I attend a demonstration class?",
      answer: "Absolutely! We encourage prospective students to attend a free demonstration class to understand our teaching methodology, course content, and facility infrastructure before making an enrollment decision."
    },
    {
      question: "What is your fee structure and payment options?",
      answer: "Our fees are competitive and transparent with no hidden costs. We offer flexible payment options including installment plans, education loans, and special discounts for students, bulk enrollments, and early bird registrations."
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
    <section className="bg-gradient-light dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="heading-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-lead">
            Get comprehensive answers to the most common questions about our professional training programs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-content">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-modern border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-600">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-2xl"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white pr-6">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
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
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
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
          className="mt-16"
        >
          <Card className="card-modern bg-gradient-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Still have questions?</h3>
              <p className="text-amber-100 mb-8 text-lg md:text-xl">
                Our professional team is here to help you find the perfect training program for your career advancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+919689044025"
                  className="btn-secondary flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 96890 44025
                </a>
                <a
                  href="mailto:tambolimahibub@gmail.com"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
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
