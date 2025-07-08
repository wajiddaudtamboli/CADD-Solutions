
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      title: "AutoCAD Complete Course",
      description: "Comprehensive 2D and 3D design training with real-world projects",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      price: "₹15,000",
      duration: "3 Months",
      rating: 4.8,
      features: ["2D Drafting", "3D Modeling", "Industry Projects", "Certificate"]
    },
    {
      title: "Python & Machine Learning",
      description: "Data science and ML development from basics to advanced",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      price: "₹20,000",
      duration: "4 Months",
      rating: 4.9,
      features: ["Python Basics", "Data Analysis", "ML Algorithms", "Live Projects"]
    },
    {
      title: "SolidWorks Professional",
      description: "3D mechanical design and simulation training",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      price: "₹18,000",
      duration: "3.5 Months",
      rating: 4.7,
      features: ["3D Design", "Assembly", "Simulation", "Drawing"]
    },
    {
      title: "ANSYS Workbench",
      description: "Advanced finite element analysis and simulation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      price: "₹25,000",
      duration: "2 Months",
      rating: 4.6,
      features: ["FEA", "CFD", "Thermal Analysis", "Optimization"]
    },
    {
      title: "Revit Architecture",
      description: "Building Information Modeling (BIM) for architects",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      price: "₹22,000",
      duration: "3 Months",
      rating: 4.8,
      features: ["BIM Modeling", "Rendering", "Documentation", "Collaboration"]
    },
    {
      title: "CATIA V5",
      description: "Advanced surface modeling and product design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      price: "₹28,000",
      duration: "4 Months",
      rating: 4.9,
      features: ["Surface Design", "Assembly", "Drafting", "Analysis"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certification courses designed by industry experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
                    {product.duration}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-800">{product.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        Brochure
                      </Button>
                      <Button size="sm">
                        Enroll Now
                      </Button>
                    </div>
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

export default Products;
