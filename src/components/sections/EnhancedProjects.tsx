
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnhancedProjects = () => {
  const projects = [
    { id: 1, image: '/imgs/portfolio/1.jpg', title: 'CAD Design Project 1' },
    { id: 2, image: '/imgs/portfolio/2.jpg', title: 'Engineering Design 2' },
    { id: 3, image: '/imgs/portfolio/3.jpg', title: 'Mechanical Project 3' },
    { id: 4, image: '/imgs/portfolio/4.jpg', title: 'Civil Design 4' },
    { id: 5, image: '/imgs/portfolio/5.jpg', title: 'Architectural Model 5' },
    { id: 6, image: '/imgs/portfolio/6.jpg', title: 'Product Design 6' },
    { id: 7, image: '/imgs/portfolio/7.jpg', title: 'Technical Drawing 7' },
    { id: 8, image: '/imgs/portfolio/8.jpg', title: 'Engineering Solution 8' },
    { id: 9, image: '/imgs/portfolio/9.jpg', title: 'Design Innovation 9' },
    { id: 10, image: '/imgs/portfolio/10.jpg', title: 'CAD Model 10' },
    { id: 11, image: '/imgs/portfolio/11.jpg', title: 'Technical Project 11' },
    { id: 12, image: '/imgs/portfolio/12.jpg', title: 'Design Project 12' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Student Projects Delivered
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Crafted with Skill, Delivered with Pride</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 border-2 border-red-200 dark:border-blue-400 rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <Button
            onClick={() => window.open('https://www.justdial.com/Solapur/CADD-Solutions-Near-Dawat-Chowk-Above-Sudha-Uphargrha-Opposite-Vasundhara-College-Jule-Solapur/9999PX217-X217-180630164209-L6I6_BZDET/gallery', '_blank')}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View More Projects
          </Button>

          {/* Gallery Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200 dark:border-blue-400">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              📸 Our Gallery
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
              Take a look at some of our works and office moments! Visit our full gallery to explore more.
            </p>
            
            <div className="block lg:hidden mb-6">
              <img
                src="/imgs/portfolio/caddemployees.jpg"
                alt="CADD Solutions Team"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg border-2 border-red-200 dark:border-blue-400"
              />
            </div>

            <Button
              onClick={() => window.open('https://www.justdial.com/Solapur/CADD-Solutions-Near-Dawat-Chowk-Above-Sudha-Uphargrha-Opposite-Vasundhara-College-Jule-Solapur/9999PX217-X217-180630164209-L6I6_BZDET/gallery', '_blank')}
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
            >
              👉 Click here to view our complete Gallery 📷
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedProjects;
