
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const About = () => {
  const team = [
    {
      name: 'Prof. Dr. Mehboob Tamboli',
      position: 'Founder & Director',
      specialization: 'CAD/CAM/CAE Expert',
      experience: '15+ Years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Leading expert in engineering design and simulation with extensive industry experience.'
    },
    {
      name: 'Prof. Rajesh Kumar',
      position: 'Senior Trainer - CAD',
      specialization: 'AutoCAD, SolidWorks',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Specialized in mechanical design and 3D modeling with proven track record.'
    },
    {
      name: 'Prof. Priya Singh',
      position: 'Software Development Lead',
      specialization: 'Python, Machine Learning',
      experience: '10+ Years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in programming languages and emerging technologies like AI/ML.'
    },
    {
      name: 'Prof. Amit Sharma',
      position: 'CAE Specialist',
      specialization: 'ANSYS, Simulation',
      experience: '8+ Years',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      description: 'Advanced simulation and analysis expert with industry consulting experience.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Students Trained' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Industry Partners' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality education and training'
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'Embracing latest technologies and modern teaching methodologies'
    },
    {
      icon: Award,
      title: 'Success',
      description: 'Ensuring every student achieves their career goals and aspirations'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong network of professionals and industry connections'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-4"
          >
            About CADD Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Empowering minds through quality technical education since 2009
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 dark:from-blue-500 dark:to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-600 dark:text-blue-400 mb-3">OUR MISSION</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Our mission at CADD Solutions is to empower students and professionals with cutting-edge technical skills in CAD, CAM, CAE, PPM, and Software Development. We aim to bridge the gap between academic learning and industry demands by delivering high-quality, practical, and job-oriented training programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 dark:from-blue-500 dark:to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-600 dark:text-blue-400 mb-3">OUR VISION</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      To be the leading technical training institute that transforms aspiring engineers and professionals into industry-ready experts. We envision creating a skilled workforce that drives innovation and excellence in engineering and technology sectors.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-4 border-red-200 dark:border-blue-400">
                <video
                  src="/imgs/portfolio/watermark.mp4"
                  className="w-full h-auto rounded-xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-pink-400 dark:from-blue-500 dark:to-purple-500 rounded-3xl -z-10 blur-lg opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 bg-white dark:bg-gray-800 border-2 border-transparent hover:border-red-200 dark:hover:border-blue-400 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 dark:from-blue-500 dark:to-purple-600 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Numbers that speak for our excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-8 bg-gradient-to-br from-red-500 to-red-700 dark:from-blue-500 dark:to-purple-600 text-white">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-red-100 dark:text-blue-100 text-lg">{achievement.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Experienced professionals dedicated to your success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 bg-white dark:bg-gray-800 border-2 border-transparent hover:border-red-200 dark:hover:border-blue-400 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-red-200 dark:border-blue-400"
                  />
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h4>
                  <p className="text-red-600 dark:text-blue-400 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{member.specialization}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{member.experience}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Visit Our Centers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">We have multiple locations to serve you better</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-blue-600" />
                  Solapur Center
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  42, 1st Floor, Apurva Building, Near Jumbo Xerox, Saat Rasta, Solapur - 413001
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-600 dark:text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">+91 96890 44025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-600 dark:text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">tambolimahibub@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600 dark:text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">Mon-Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-blue-600" />
                  Karad Center
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Dargah Mohalla, Mangalwar Peth Karad, Karad, Maharashtra 415110
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-600 dark:text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">+91 77220 82626</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-600 dark:text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">tambolimahibub@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600 dark:text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">Mon-Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
