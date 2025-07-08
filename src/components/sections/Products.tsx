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
  return;
};
export default Products;