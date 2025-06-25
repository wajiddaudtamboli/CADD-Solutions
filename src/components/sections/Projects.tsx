
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Automotive Engine Design",
      description: "Complete engine assembly design and analysis using CATIA and ANSYS",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      technologies: ["CATIA", "ANSYS", "SolidWorks"],
      category: "Mechanical Design",
      client: "Automotive Industry"
    },
    {
      title: "Building Information Modeling",
      description: "Complete residential complex design with BIM implementation",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      technologies: ["Revit", "AutoCAD", "3Ds Max"],
      category: "Architecture",
      client: "Construction Company"
    },
    {
      title: "Machine Learning Analytics",
      description: "Predictive analytics dashboard for manufacturing quality control",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["Python", "Machine Learning", "Data Science"],
      category: "Software Development",
      client: "Manufacturing Industry"
    },
    {
      title: "Industrial Equipment Design",
      description: "Custom machinery design for food processing industry",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      technologies: ["SolidWorks", "AutoCAD", "ANSYS"],
      category: "Industrial Design",
      client: "Food Processing"
    },
    {
      title: "Civil Infrastructure Planning",
      description: "Highway bridge design and structural analysis",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop",
      technologies: ["STAAD.PRO", "ETABS", "AutoCAD Civil 3D"],
      category: "Civil Engineering",
      client: "Government Project"
    },
    {
      title: "IoT Device Development",
      description: "Smart monitoring system for industrial applications",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
      technologies: ["Python", "C++", "Java"],
      category: "IoT Development",
      client: "Tech Startup"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world projects completed by our students and professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, rotateY: 5 }}
              className="h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Completed
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                  <div className="text-sm text-blue-600 font-medium">
                    Client: {project.client}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
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

export default Projects;
