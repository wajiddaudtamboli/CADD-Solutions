import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: "Irfan Shaikh",
    role: "Associate System Administrator",
    company: "Softenger",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "CADD Solutions shaped my career with practical training! The hands-on approach and industry-focused curriculum made all the difference.",
    rating: 5
  }, {
    name: "Bhimashankar Bagale",
    role: "Associate Software Engineer",
    company: "TCS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Great place to learn Python and ML with real projects! The instructors are knowledgeable and supportive throughout the journey.",
    rating: 5
  }, {
    name: "Yusuf Tamboli",
    role: "Site Engineer",
    company: "Larson & Turbo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Best for CAD & CAE training, got placed successfully! The practical experience gained here was invaluable for my career growth.",
    rating: 5
  }];
  return <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-8 md:mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Success stories from our graduates who are now thriving in their careers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: 5,
          scale: 1.02
        }} className="h-full" style={{
          transformStyle: 'preserve-3d'
        }}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-8 h-8 text-blue-300" />

                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t">

                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">@{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
