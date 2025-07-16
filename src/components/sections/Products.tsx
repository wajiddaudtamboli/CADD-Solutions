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
    <section id="products" className="py-20 bg-gradient-to-br from-white via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-yellow-900 dark:to-amber-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Training Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional courses designed for industry excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Enroll Now
                  </Button>
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