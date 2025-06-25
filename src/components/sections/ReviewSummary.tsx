
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ReviewSummary = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">📍 CADD SOLUTIONS - Location Review</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  CADD Solutions, located in the heart of <strong>Solapur & Karad</strong>, is a trusted name for engineering design, software training, and consultancy services. They are well-known for their professional approach, skilled team, and high-quality solutions for students and professionals alike.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">Highly Rated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">500+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Certified Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="font-semibold">Prime Locations</span>
                  </div>
                </div>
                
                <motion.div 
                  className="text-center py-4 bg-white rounded-lg shadow-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-center items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-semibold text-lg text-gray-800">
                    ⭐ Rated highly by customers for excellent service and support
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="/imgs/portfolio/caddsol.jpg" 
                alt="CADD Solutions Poster" 
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl -z-10 blur-xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSummary;
