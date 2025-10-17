import { motion } from 'framer-motion';
import { Award, Heart, Star, Target } from 'lucide-react';
const OurValues = () => {
  return <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-white via-red-50 to-pink-50 dark:from-gray-800 dark:via-blue-800 dark:to-indigo-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Our Values
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 dark:from-blue-500 dark:to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-600 dark:text-blue-400 mb-2">MISSION</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed hidden md:block">
                    Our mission at CADD Solutions is to empower students and professionals with cutting-edge technical skills in CAD, CAM, CAE, PPM, and Software Development. We aim to bridge the gap between academic learning and industry demands by delivering high-quality, practical, and job-oriented training programs. Through innovative teaching methods and expert guidance, we strive to enhance employability, foster creativity, and build a skilled workforce ready to tackle real-world engineering and software challenges.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed md:hidden">
                    Empowering students & professionals with CAD, CAM, CAE, PPM, and Software Development skills through job-oriented training for real-world challenges.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <motion.div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg" whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                  <Heart className="w-8 h-8 mx-auto mb-3 text-red-600 dark:text-blue-400" />
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Excellence</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Committed to delivering the highest quality education</p>
                </motion.div>

                <motion.div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg" whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                  <Star className="w-8 h-8 mx-auto mb-3 text-red-600 dark:text-blue-400" />
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Embracing latest technologies and teaching methods</p>
                </motion.div>

                <motion.div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg" whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                  <Award className="w-8 h-8 mx-auto mb-3 text-red-600 dark:text-blue-400" />
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Success</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ensuring every student achieves their career goals</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-2xl shadow-2xl border-4 border-red-200 dark:border-blue-400">
                <img
                  src="https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609583/caddemployees_xshmbi.jpg"
                  alt="CADD Solutions Team"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-pink-400 dark:from-blue-500 dark:to-purple-500 rounded-3xl -z-10 blur-lg opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default OurValues;
