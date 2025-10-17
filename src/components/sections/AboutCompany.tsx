
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Award, Mail, Target, Users } from 'lucide-react';

const AboutCompany = () => {
  const handleGetInTouch = () => {
    window.location.href = 'mailto:tambolimahibub@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.';
  };

  return (
    <section id="about" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              About Company
            </h2>

            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 hidden md:block">
                At CADD Solutions, we specialize in providing professional training in CAD, CAM, CAE, PPM, and Software Development, helping students and professionals gain industry-relevant skills. Our focus is on delivering practical, hands-on training in tools like AutoCAD, CREO, CATIA, NX CAD, ANSYS, Revit Architecture, Python, Java, Machine Learning, and Data Science, ensuring every learner is prepared to meet real-world challenges.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 md:hidden">
                We provide comprehensive, hands-on training in CAD, CAM, CAE, PPM, and software development, leveraging industry-standard tools such as AutoCAD, CREO, SolidWorks, Ansys, MATLAB, Python, Java, and more. Our expert-led courses are designed to bridge the gap between theoretical knowledge and practical application.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <motion.div
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users className="w-8 h-8 mx-auto mb-2 text-red-600 dark:text-blue-400" />
                  <div className="text-2xl font-bold text-red-600 dark:text-blue-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students Trained</div>
                </motion.div>

                <motion.div
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="w-8 h-8 mx-auto mb-2 text-red-600 dark:text-blue-400" />
                  <div className="text-2xl font-bold text-red-600 dark:text-blue-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Courses Offered</div>
                </motion.div>

                <motion.div
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Target className="w-8 h-8 mx-auto mb-2 text-red-600 dark:text-blue-400" />
                  <div className="text-2xl font-bold text-red-600 dark:text-blue-400">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </motion.div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600 p-6 rounded-lg text-white">
              <p className="text-center font-semibold mb-2">Team CADD SOLUTIONS | MARK SOLUTIONS</p>
              <p className="text-center text-sm opacity-90">MSME | NEIR | ISO 9001:2015 Certified</p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleGetInTouch}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609576/caddposter_zbljby.jpg"
                alt="CADD Poster"
                className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-red-200 dark:border-blue-400"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-pink-400 dark:from-blue-500 dark:to-purple-500 rounded-3xl -z-10 blur-lg opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
