
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, Building, Cpu, Database, Wrench, Settings, Calculator, Compass, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EnhancedServices = () => {
  const services = [
    {
      icon: Settings,
      title: "CAD Design & Modeling",
      description: "Master professional CAD software with hands-on industry projects and real-world applications.",
      courses: ["AutoCAD", "CREO", "CATIA", "SolidWorks", "NX CAD & CAM"],
      color: "from-primary to-primary/80"
    },
    {
      icon: Calculator,
      title: "CAE & Analysis",
      description: "Advanced engineering analysis and simulation using industry-standard software solutions.",
      courses: ["ANSYS Workbench", "Hypermesh", "Finite Element Analysis", "CFD Analysis"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building,
      title: "Civil & Architecture",
      description: "Comprehensive building design and construction technology training programs.",
      courses: ["AutoCAD Civil 3D", "Revit Architecture", "3Ds Max", "STAAD.PRO", "ETABS"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Modern programming languages and development frameworks for technical professionals.",
      courses: ["C Programming", "C++", "Java", "Python", "Web Development"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Data Science & ML",
      description: "Advanced data analytics and machine learning techniques for engineering applications.",
      courses: ["Python", "Machine Learning", "Data Science", "AI Applications"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Compass,
      title: "Project Management",
      description: "Professional project planning and management tools for engineering projects.",
      courses: ["MS Project", "Primavera", "Building Estimation", "Project Planning"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="professional-section gradient-bg-light">
      <div className="professional-container">
        <motion.div 
          className="text-center professional-margin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="professional-heading">
            Professional Training Services
          </h2>
          <p className="professional-text">
            Comprehensive training programs designed to meet industry demands and accelerate your career growth 
            with cutting-edge technology and expert instruction.
          </p>
        </motion.div>

        <motion.div 
          className="professional-grid professional-grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="h-full"
            >
              <Card className="professional-card h-full hover-glow group">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className={`professional-icon bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="professional-subheading text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="professional-text text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Layers className="w-4 h-4 mr-2 text-primary" />
                      Course Modules:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.courses.map((course, courseIndex) => (
                        <motion.div
                          key={course}
                          className="flex items-center p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: courseIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">
                            {course}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="mt-6 pt-4 border-t border-border"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Monitor className="w-4 h-4 mr-1" />
                        Hands-on Training
                      </span>
                      <span className="flex items-center">
                        <Wrench className="w-4 h-4 mr-1" />
                        Industry Projects
                      </span>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center professional-margin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="professional-card gradient-bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="professional-padding">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h3>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of professionals who have advanced their careers with our industry-leading training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call: +91 96890 44025
                </motion.button>
                <motion.button
                  className="bg-background/20 backdrop-blur-sm border-2 border-background/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/30 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✉️ Get Course Brochure
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServices;
