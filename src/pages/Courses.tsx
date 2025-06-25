
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'CAD', 'CAM', 'CAE', 'Software Development', 'Civil', 'Electrical'];

  const courses = [
    {
      id: 1,
      title: 'AutoCAD Complete Course',
      category: 'CAD',
      description: 'Master 2D and 3D design with AutoCAD from basics to advanced level',
      duration: '3 Months',
      fees: '₹15,000',
      language: 'English/Hindi/Marathi',
      rating: 4.8,
      students: 150,
      trainer: 'Prof. Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      features: ['2D Drafting', '3D Modeling', 'Industry Projects', 'Certificate'],
      batches: ['Morning (9:00 AM - 11:00 AM)', 'Evening (6:00 PM - 8:00 PM)']
    },
    {
      id: 2,
      title: 'SolidWorks Professional',
      category: 'CAD',
      description: '3D mechanical design and simulation training with real-world projects',
      duration: '3.5 Months',
      fees: '₹18,000',
      language: 'English/Hindi',
      rating: 4.7,
      students: 120,
      trainer: 'Prof. Amit Sharma',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
      features: ['3D Design', 'Assembly', 'Simulation', 'Drawing'],
      batches: ['Morning (10:00 AM - 12:00 PM)', 'Evening (7:00 PM - 9:00 PM)']
    },
    {
      id: 3,
      title: 'Python & Machine Learning',
      category: 'Software Development',
      description: 'Complete Python programming with Machine Learning and Data Science',
      duration: '4 Months',
      fees: '₹20,000',
      language: 'English/Hindi',
      rating: 4.9,
      students: 200,
      trainer: 'Prof. Priya Singh',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      features: ['Python Basics', 'Data Analysis', 'ML Algorithms', 'Live Projects'],
      batches: ['Morning (9:30 AM - 11:30 AM)', 'Evening (6:30 PM - 8:30 PM)']
    },
    {
      id: 4,
      title: 'ANSYS Workbench',
      category: 'CAE',
      description: 'Advanced finite element analysis and computational fluid dynamics',
      duration: '2 Months',
      fees: '₹25,000',
      language: 'English',
      rating: 4.6,
      students: 80,
      trainer: 'Prof. Dr. Mehboob Tamboli',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      features: ['FEA', 'CFD', 'Thermal Analysis', 'Optimization'],
      batches: ['Weekend (10:00 AM - 1:00 PM)', 'Evening (7:00 PM - 9:00 PM)']
    },
    {
      id: 5,
      title: 'Revit Architecture',
      category: 'Civil',
      description: 'Building Information Modeling (BIM) for architects and civil engineers',
      duration: '3 Months',
      fees: '₹22,000',
      language: 'English/Hindi/Marathi',
      rating: 4.8,
      students: 95,
      trainer: 'Prof. Sandeep Patil',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop',
      features: ['BIM Modeling', 'Rendering', 'Documentation', 'Collaboration'],
      batches: ['Morning (8:00 AM - 10:00 AM)', 'Evening (5:00 PM - 7:00 PM)']
    },
    {
      id: 6,
      title: 'CATIA V5',
      category: 'CAD',
      description: 'Advanced surface modeling and product design for automotive industry',
      duration: '4 Months',
      fees: '₹28,000',
      language: 'English',
      rating: 4.9,
      students: 70,
      trainer: 'Prof. Vikram Desai',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      features: ['Surface Design', 'Assembly', 'Drafting', 'Analysis'],
      batches: ['Morning (9:00 AM - 12:00 PM)', 'Evening (6:00 PM - 9:00 PM)']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Our Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Industry-leading training programs designed by experts to accelerate your career
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-200 dark:hover:border-blue-400 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 dark:bg-blue-600 text-white">
                        {course.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm">{course.rating}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 dark:text-white">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students} students
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-2 py-1 bg-red-50 dark:bg-blue-50 text-red-700 dark:text-blue-700 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-2xl font-bold text-red-600 dark:text-blue-400">{course.fees}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{course.language}</div>
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <strong>Trainer:</strong> {course.trainer}
                      </div>

                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600 hover:from-red-700 hover:to-red-900 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white">
                        Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 text-xl">
                No courses found matching your criteria
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
