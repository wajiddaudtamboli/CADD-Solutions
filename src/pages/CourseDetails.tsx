
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Calendar, MapPin, Phone, Mail, Download, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const CourseDetails = () => {
  const course = {
    title: 'AutoCAD Complete Course',
    category: 'CAD',
    description: 'Master 2D and 3D design with AutoCAD from basics to advanced level. This comprehensive course covers all aspects of computer-aided design using industry-standard AutoCAD software.',
    duration: '3 Months',
    fees: '₹15,000',
    language: 'English/Hindi/Marathi',
    rating: 4.8,
    students: 150,
    trainer: {
      name: 'Prof. Rajesh Kumar',
      experience: '12+ Years',
      specialization: 'CAD Design & Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    features: ['2D Drafting', '3D Modeling', 'Industry Projects', 'Certificate'],
    batches: [
      { time: 'Morning (9:00 AM - 11:00 AM)', days: 'Mon-Fri', seats: 12 },
      { time: 'Evening (6:00 PM - 8:00 PM)', days: 'Mon-Fri', seats: 8 }
    ],
    curriculum: [
      {
        module: 'Module 1: Introduction to AutoCAD',
        topics: ['AutoCAD Interface', 'Drawing Setup', 'Basic Commands', 'Coordinate Systems']
      },
      {
        module: 'Module 2: 2D Drafting',
        topics: ['Drawing Tools', 'Editing Commands', 'Layers & Properties', 'Dimensioning']
      },
      {
        module: 'Module 3: 3D Modeling',
        topics: ['3D Basics', 'Solid Modeling', 'Surface Modeling', 'Rendering']
      },
      {
        module: 'Module 4: Advanced Features',
        topics: ['Blocks & Attributes', 'External References', 'Plotting & Publishing', 'Customization']
      },
      {
        module: 'Module 5: Industry Projects',
        topics: ['Mechanical Drawing', 'Architectural Plans', 'Electrical Schematics', 'Portfolio Development']
      }
    ],
    prerequisites: 'Basic computer knowledge',
    certification: 'Industry-recognized certificate upon completion',
    jobProspects: ['CAD Designer', 'Draftsman', 'Design Engineer', 'Technical Illustrator']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Badge className="bg-red-600 dark:bg-blue-600 text-white">
                {course.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-600 dark:text-gray-400">({course.students} students)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600 hover:from-red-700 hover:to-red-900 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white px-8 py-3">
                  Enroll Now - {course.fees}
                </Button>
                <Button variant="outline" className="px-8 py-3 dark:border-gray-600 dark:text-gray-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-20 h-20 bg-red-600/80 dark:bg-blue-600/80 hover:bg-red-700/80 dark:hover:bg-blue-700/80">
                  <Play className="w-8 h-8 text-white" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Curriculum */}
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.curriculum.map((module, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{module.module}</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {module.topics.map((topic, idx) => (
                            <div key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                              <div className="w-2 h-2 bg-red-600 dark:bg-blue-600 rounded-full mr-2"></div>
                              {topic}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trainer Profile */}
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Meet Your Trainer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <img
                      src={course.trainer.image}
                      alt={course.trainer.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{course.trainer.name}</h4>
                      <p className="text-red-600 dark:text-blue-400 font-medium">{course.trainer.specialization}</p>
                      <p className="text-gray-600 dark:text-gray-400">{course.trainer.experience} Experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Prospects */}
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Career Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {course.jobProspects.map((job, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-600 dark:bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{job}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info */}
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Language:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{course.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Prerequisites:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{course.prerequisites}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Certification:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">Yes</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-3xl font-bold text-red-600 dark:text-blue-400 text-center">{course.fees}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Batch Timings */}
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">Available Batches</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {course.batches.map((batch, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-red-600 dark:text-blue-600" />
                        <span className="font-semibold text-gray-800 dark:text-white">{batch.time}</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <div>{batch.days}</div>
                        <div className="text-green-600 dark:text-green-400">{batch.seats} seats available</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-600 dark:text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">+91 96890 44025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-600 dark:text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">tambolimahibub@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 dark:text-blue-600 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      42, 1st Floor, Apurva Building, Near Jumbo Xerox, Saat Rasta, Solapur - 413001
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600 hover:from-red-700 hover:to-red-900 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
