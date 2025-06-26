
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EnhancedContact = () => {
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
    'AutoCAD', 'CREO', 'CATIA', 'Solid Works', 'NX CAD & NX CAM', 'ANSYS Workbench',
    'Hypermesh', 'AutoCAD Civil 3D', 'Revit Architecture', '3Ds Max', 'STAAD.PRO',
    'ETABS', 'AutoCAD Electrical', 'MS Project', 'Primavera', 'Building Estimation',
    'C Programming', 'C++', 'Java', 'Python', 'Machine Learning', 'Data Science'
  ];

  const inquiryTypes = [
    'Admission', 'Certificate', 'Demo Class', 'Fee Structure', 'Course Duration', 'Job', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.number || !formData.email || !formData.location || !formData.inquiryCourse || !formData.inquiryType) {
      alert("Please fill in all required fields.");
      return;
    }

    // WhatsApp numbers
    const whatsappNumbers = ["919689044025", "917722082626"];
    const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
    const selectedNumber = whatsappNumbers[randomIndex];

    // Creating WhatsApp message
    const message = `CADD SOLUTIONS Inquiry:%0A%0A👤 Name: ${encodeURIComponent(formData.name)}%0A📞 Mobile: ${encodeURIComponent(formData.number)}%0A📧 Email: ${encodeURIComponent(formData.email)}%0A📍 Location: ${encodeURIComponent(formData.location)}%0A📚 Course: ${encodeURIComponent(formData.inquiryCourse)}%0A🎯 Inquiry Type: ${encodeURIComponent(formData.inquiryType)}%0A💬 Message: ${encodeURIComponent(formData.comments || "No additional message")}`;

    // WhatsApp API URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${selectedNumber}&text=${message}&source=&data=&app_absent=0`;

    // Redirecting to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-red-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            CONTACT US
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Get in touch and we'll get back to you within 24 hours</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-blue-600" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Solapur Location */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Solapur Center</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    CADD Solutions, 42, 1st Floor, Apurva Building, Near Jumbo Xerox, Saat Rasta, Solapur - 413001
                  </p>
                  <div className="text-center">
                    <a 
                      href="https://www.google.com/maps/place/CADD+SOLUTIONS+SOLAPUR/@17.6612065,75.9064828,17z/data=!4m6!3m5!1s0x3bc5dbb20957843f:0xabcfbedec349e16a!8m2!3d17.661217!4d75.9063813!16s%2Fg%2F11fjm9zvqj?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 dark:text-blue-400 hover:text-red-800 dark:hover:text-blue-600 font-semibold transition-colors"
                    >
                      👉 View Location on Google Maps
                    </a>
                  </div>
                </div>

                {/* Karad Location */}
                <div className="space-y-3 border-t pt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Karad Center</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    CADD Solutions, Dargah Mohalla, Mangalwar Peth Karad, Karad, Maharashtra 415110
                  </p>
                  <div className="text-center">
                    <a 
                      href="https://www.google.com/maps/place/CADD+Solutions+Karad/@17.2913639,74.1844106,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc18321c7051a65:0x628fcdffe489b228!8m2!3d17.2913639!4d74.1844106!16s%2Fg%2F11rmz88jc7?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 dark:text-blue-400 hover:text-red-800 dark:hover:text-blue-600 font-semibold transition-colors"
                    >
                      👉 View Location on Google Maps
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5487723167615!2d75.91448977511485!3d17.68089478303488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dc71d82b41f7%3A0xbbe2529da65e59c3!2sCADD%20Solutions%2C%2042%201st%20Floor%2C%20Apurva%20Building%2C%20Near%20Jumbo%20Xerox%2C%20Saat%20Rasta%2C%20Solapur%2C%20Maharashtra%20413001!5e0!3m2!1sen!2sin!4v1710247028736!5m2!1sen!2sin"
                    width="100%" 
                    height="250" 
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                  />
                </div>

                {/* Contact Details */}
                <div className="space-y-4 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-600 dark:text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">+91 96890 44025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-600 dark:text-blue-600" />
                    <a 
                      href="mailto:tambolimahibub@gmail.com" 
                      className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-400 transition-colors"
                    >
                      tambolimahibub@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-600 dark:text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Mon-Sat: 9:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="number"
                        placeholder="Mobile Number *"
                        required
                        value={formData.number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <select
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="" disabled>Select Location *</option>
                        <option value="Solapur">Solapur</option>
                        <option value="Karad">Karad</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <select
                        name="inquiryCourse"
                        required
                        value={formData.inquiryCourse}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="" disabled>Select Course *</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="" disabled>Select Inquiry Type *</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="comments"
                      placeholder="Your Message (Optional)"
                      rows={5}
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-vertical"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600 hover:from-red-700 hover:to-red-900 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Review Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
                📍 CADD SOLUTIONS - Location Review
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-4">
                CADD Solutions, located in the heart of Solapur, is a trusted name for engineering design, software training, and consultancy services. They are well-known for their professional approach, skilled team, and high-quality solutions for students and professionals alike. Conveniently located at <strong>Solapur & Karad</strong>, the office is easy to find and accessible.
              </p>
              <p className="text-center text-gray-700 dark:text-gray-300">
                ⭐ Rated highly by customers for their excellent service and support.
              </p>
              
              {/* Mobile-only image */}
              <div className="block md:hidden mt-6">
                <img 
                  src="/imgs/portfolio/caddsol.jpg" 
                  alt="CADD Solutions Poster" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContact;
