import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, Users, Target, TrendingUp, CheckCircle, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const ReviewSummary = () => {
  const stats = [{
    icon: Users,
    value: "500+",
    label: "Students Trained",
    color: "text-blue-600"
  }, {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    color: "text-green-600"
  }, {
    icon: Target,
    value: "15+",
    label: "Expert Courses",
    color: "text-purple-600"
  }, {
    icon: Globe,
    value: "2",
    label: "Prime Locations",
    color: "text-orange-600"
  }];
  const achievements = ["Industry-recognized certification programs", "Expert instructors with 10+ years experience", "State-of-the-art training facilities", "100% placement assistance guarantee", "Partnerships with leading companies", "Flexible learning schedules available"];
  return <section className="professional-section bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      
    </section>;
};
export default ReviewSummary;