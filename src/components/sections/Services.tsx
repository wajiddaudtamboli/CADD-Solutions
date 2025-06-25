
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, Building, Cpu, Database, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "CAD Design Training",
      description: "Master AutoCAD, CREO, CATIA, SolidWorks, and NX CAD with hands-on projects",
      courses: ["AutoCAD", "CREO", "CATIA", "SolidWorks", "NX CAD & CAM"]
    },
    {
      icon: Cpu,
      title: "CAE & Analysis",
      description: "Learn advanced engineering analysis with industry-standard software",
      courses: ["ANSYS Workbench", "Hypermesh", "Simulation"]
    },
    {
      icon: Building,
      title: "Civil & Architecture",
      description: "Building design and construction technology training",
      courses: ["AutoCAD Civil 3D", "Revit Architecture", "3Ds Max", "STAAD.PRO", "ETABS"]
    },
    {
      icon: Code,
      title: "Programming & Development",
      description: "Software development and programming languages",
      courses: ["C Programming", "C++", "Java", "Python"]
    },
    {
      icon: Database,
      title: "Data Science & ML",
      description: "Modern data analytics and machine learning techniques",
      courses: ["Python", "Machine Learning", "Data Science"]
    },
    {
      icon: Wrench,
      title: "Project Management",
      description: "Professional project planning and management tools",
      courses: ["MS Project", "Primavera", "Building Estimation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive training programs designed to meet industry demands and boost your career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.courses.map((course) => (
                      <span 
                        key={course}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
