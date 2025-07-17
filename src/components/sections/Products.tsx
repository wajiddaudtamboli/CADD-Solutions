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
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Premium Courses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master industry-leading software with our comprehensive training programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-gray-500">{product.duration}</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button className="flex-1" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
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