
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    location: '',
    inquiryCourse: '',
    inquiryType: '',
    comments: ''
  });

  const courses = [
    "AutoCAD", "CREO", "CATIA", "Solid Works", "NX CAD & NX CAM",
    "ANSYS Workbench", "Hypermesh", "AutoCAD Civil 3D", "Revit Architecture",
    "3Ds Max", "STAAD.PRO", "ETABS", "AutoCAD Electrical", "MS Project",
    "Primavera", "Building Estimation", "C Programming", "C++", "Java",
    "Python", "Machine Learning", "Data Science"
  ];

  const inquiryTypes = [
    "Admission", "Certificate", "Demo Class", "Fee Structure",
    "Course Duration", "Job", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.number || !formData.email || !formData.location || 
        !formData.inquiryCourse || !formData.inquiryType) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const whatsappNumbers = ["919689044025", "917722082626"];
    const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
    const selectedNumber = whatsappNumbers[randomIndex];

    const message = `CADD SOLUTIONS Inquiry:%0A%0A👤 Name: ${encodeURIComponent(formData.name)}%0A📞 Mobile: ${encodeURIComponent(formData.number)}%0A📧 Email: ${encodeURIComponent(formData.email)}%0A📍 Location: ${encodeURIComponent(formData.location)}%0A📚 Course: ${encodeURIComponent(formData.inquiryCourse)}%0A🎯 Inquiry Type: ${encodeURIComponent(formData.inquiryType)}%0A💬 Message: ${encodeURIComponent(formData.comments || "No additional message")}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${selectedNumber}&text=${message}&source=&data=&app_absent=0`;
    window.open(whatsappURL, "_blank");

    toast({
      title: "Success!",
      description: "Your inquiry has been sent via WhatsApp.",
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-50" style={{ marginBottom: 'clamp(60px, 8vh, 80px)' }}>
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Our Professional Center
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Get in touch with us and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Solapur Office</h4>
                  <p className="text-gray-600 text-sm">
                    42, 1st Floor, Apurva Building, Near Jumbo Xerox, Saat Rasta, Solapur - 413001
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/CADD+SOLUTIONS+SOLAPUR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    👉 View on Google Maps
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Karad Office</h4>
                  <p className="text-gray-600 text-sm">
                    Dargah Mohalla, Mangalwar Peth Karad, Karad, Maharashtra 415110
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/CADD+Solutions+Karad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    👉 View on Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <a href="tel:+919689044025" className="text-gray-800 hover:text-blue-600">
                      +91 96890 44025
                    </a>
                    <br />
                    <a href="tel:+917722082626" className="text-gray-800 hover:text-blue-600">
                      +91 77220 82626
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a 
                    href="mailto:tambolimahibub@gmail.com" 
                    className="text-gray-800 hover:text-blue-600"
                  >
                    tambolimahibub@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5487723167615!2d75.91448977511485!3d17.68089478303488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dc71d82b41f7%3A0xbbe2529da65e59c3!2sCADD%20Solutions%2C%2042%201st%20Floor%2C%20Apurva%20Building%2C%20Near%20Jumbo%20Xerox%2C%20Saat%20Rasta%2C%20Solapur%2C%20Maharashtra%20413001!5e0!3m2!1sen!2sin!4v1710247028736!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Professional Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Mobile Number *"
                      value={formData.number}
                      onChange={(e) => setFormData({...formData, number: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Location *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Solapur">Solapur</SelectItem>
                        <SelectItem value="Karad">Karad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select value={formData.inquiryCourse} onValueChange={(value) => setFormData({...formData, inquiryCourse: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Course *" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>{course}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={formData.inquiryType} onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Inquiry Type *" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Textarea
                    placeholder="Your Message (Optional)"
                    rows={4}
                    value={formData.comments}
                    onChange={(e) => setFormData({...formData, comments: e.target.value})}
                  />
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 text-sm sm:text-base font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    Send Us a Professional Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
