import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Products = () => {
  const products = [{
    title: "AutoCAD Complete Course",
    description: "Comprehensive 2D and 3D design training with real-world projects",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    price: "₹15,000",
    duration: "3 Months",
    rating: 4.8,
    features: ["2D Drafting", "3D Modeling", "Industry Projects", "Certificate"]
  }, {
    title: "Python & Machine Learning",
    description: "Data science and ML development from basics to advanced",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    price: "₹20,000",
    duration: "4 Months",
    rating: 4.9,
    features: ["Python Basics", "Data Analysis", "ML Algorithms", "Live Projects"]
  }, {
    title: "SolidWorks Professional",
    description: "3D mechanical design and simulation training",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    price: "₹18,000",
    duration: "3.5 Months",
    rating: 4.7,
    features: ["3D Design", "Assembly", "Simulation", "Drawing"]
  }, {
    title: "ANSYS Workbench",
    description: "Advanced finite element analysis and simulation",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    price: "₹25,000",
    duration: "2 Months",
    rating: 4.6,
    features: ["FEA", "CFD", "Thermal Analysis", "Optimization"]
  }, {
    title: "Revit Architecture",
    description: "Building Information Modeling (BIM) for architects",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    price: "₹22,000",
    duration: "3 Months",
    rating: 4.8,
    features: ["BIM Modeling", "Rendering", "Documentation", "Collaboration"]
  }, {
    title: "CATIA V5",
    description: "Advanced surface modeling and product design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    price: "₹28,000",
    duration: "4 Months",
    rating: 4.9,
    features: ["Surface Design", "Assembly", "Drafting", "Analysis"]
  }];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-focused courses designed to build real-world skills and advance your career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground">{product.duration}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What you'll learn:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
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
export default Products;