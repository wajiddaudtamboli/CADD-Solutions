
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, Users, Target, TrendingUp, CheckCircle, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ReviewSummary = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Students Trained", color: "text-blue-600" },
    { icon: Award, value: "95%", label: "Success Rate", color: "text-green-600" },
    { icon: Target, value: "15+", label: "Expert Courses", color: "text-purple-600" },
    { icon: Globe, value: "2", label: "Prime Locations", color: "text-orange-600" }
  ];

  const achievements = [
    "Industry-recognized certification programs",
    "Expert instructors with 10+ years experience", 
    "State-of-the-art training facilities",
    "100% placement assistance guarantee",
    "Partnerships with leading companies",
    "Flexible learning schedules available"
  ];

  return (
    <section className="professional-section bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <div className="professional-container">
        <motion.div 
          className="text-center professional-margin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="professional-heading">
            📍 CADD Solutions - Excellence Review
          </h2>
          <p className="professional-text">
            Trusted leader in professional engineering training across Solapur & Karad with outstanding track record
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="professional-spacing"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="professional-card gradient-bg-light">
              <CardContent className="professional-padding">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Premium Locations</h3>
                    <p className="text-muted-foreground">Solapur & Karad, Maharashtra</p>
                  </div>
                </div>

                <p className="professional-text text-left mb-8">
                  CADD Solutions stands as a beacon of excellence in engineering education, strategically located 
                  in Maharashtra's key industrial hubs. We are renowned for our professional approach, skilled 
                  faculty, and innovative training methodologies that bridge the gap between academic learning 
                  and industry requirements.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 bg-background/60 rounded-xl border border-border/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Key Achievements:
                  </h4>
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/30 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Rating Display */}
                <motion.div 
                  className="text-center py-6 mt-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-center items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="font-bold text-xl text-foreground mb-2">
                    ⭐ Outstanding 5-Star Rating
                  </p>
                  <p className="text-muted-foreground">
                    Consistently rated by students for excellence in training and support
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Content - Featured Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="professional-media-frame max-w-lg w-full hover-scale hover-glow"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="/imgs/portfolio/caddsol.jpg" 
                alt="CADD Solutions Training Center" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="text-sm font-bold flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  Certified Excellence
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center professional-margin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="professional-card gradient-bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="professional-padding">
              <h3 className="text-3xl font-bold mb-4">Join Our Success Story</h3>
              <p className="text-lg mb-8 opacity-90">
                Be part of our growing community of successful professionals across Maharashtra's leading companies
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="tel:+919689044025"
                  className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-colors duration-200 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call: +91 96890 44025
                </motion.a>
                <motion.a
                  href="#contact"
                  className="bg-background/20 backdrop-blur-sm border-2 border-background/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/30 transition-colors duration-200 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🏢 Visit Our Centers
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSummary;
