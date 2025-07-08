
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Irfan Shaikh",
      role: "Associate System Administrator",
      company: "Softenger",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "CADD Solutions transformed my career with their practical, industry-focused training approach. The hands-on methodology and comprehensive curriculum made all the difference in my professional growth.",
      rating: 5,
      location: "Pune, Maharashtra"
    },
    {
      name: "Bhimashankar Bagale",
      role: "Associate Software Engineer",
      company: "TCS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Outstanding place to learn Python and Machine Learning with real-world projects! The instructors are exceptionally knowledgeable and provide continuous support throughout the learning journey.",
      rating: 5,
      location: "Mumbai, Maharashtra"
    },
    {
      name: "Yusuf Tamboli",
      role: "Site Engineer",
      company: "Larson & Turbo",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "Best training institute for CAD & CAE with guaranteed placement assistance! The practical experience and industry connections provided here were invaluable for my successful career transition.",
      rating: 5,
      location: "Solapur, Maharashtra"
    },
    {
      name: "Priya Sharma",
      role: "Design Engineer",
      company: "Mahindra & Mahindra",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "The AutoCAD and SolidWorks training program exceeded my expectations. Professional instructors, state-of-the-art facilities, and excellent placement support made this the perfect choice for my career advancement.",
      rating: 5,
      location: "Karad, Maharashtra"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="professional-section bg-gradient-to-br from-accent/30 via-background to-secondary/30">
      <div className="professional-container">
        <motion.div 
          className="text-center professional-margin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="professional-heading">
            Success Stories & Reviews
          </h2>
          <p className="professional-text">
            Hear from our graduates who are now thriving in their careers across leading companies and organizations
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="professional-card">
                <CardContent className="professional-padding text-center">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <Quote className="w-12 h-12 text-primary mx-auto opacity-60" />
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.p
                    className="text-lg md:text-xl leading-relaxed text-foreground italic mb-8 text-justify"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>

                  {/* Rating Stars */}
                  <motion.div
                    className="flex items-center justify-center gap-1 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* User Info */}
                  <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="professional-media-frame w-20 h-20 rounded-full overflow-hidden">
                      <motion.img 
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <div className="font-bold text-lg text-foreground mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-primary font-semibold mb-1">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground mb-1">
                        <Building className="w-4 h-4 mr-1" />
                        {testimonials[currentIndex].company}
                      </div>
                      <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-background/80 backdrop-blur-sm hover:bg-background border-primary/20 hover:border-primary/40"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-background/80 backdrop-blur-sm hover:bg-background border-primary/20 hover:border-primary/40"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary/20 border-2 border-primary' 
                  : 'bg-accent hover:bg-accent/80 border-2 border-transparent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="professional-media-frame w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs font-semibold text-foreground truncate">
                {testimonial.name}
              </div>
              <div className="text-xs text-muted-foreground truncate">
                {testimonial.company}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
