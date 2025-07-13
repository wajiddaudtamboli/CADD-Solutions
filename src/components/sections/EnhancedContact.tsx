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
  const courses = ['AutoCAD', 'CREO', 'CATIA', 'Solid Works', 'NX CAD & NX CAM', 'ANSYS Workbench', 'Hypermesh', 'AutoCAD Civil 3D', 'Revit Architecture', '3Ds Max', 'STAAD.PRO', 'ETABS', 'AutoCAD Electrical', 'MS Project', 'Primavera', 'Building Estimation', 'C Programming', 'C++', 'Java', 'Python', 'Machine Learning', 'Data Science'];
  const inquiryTypes = ['Admission', 'Certificate', 'Demo Class', 'Fee Structure', 'Course Duration', 'Job Placement', 'Corporate Training', 'Other'];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.number || !formData.email || !formData.location || !formData.inquiryCourse || !formData.inquiryType) {
      alert("Please fill in all required fields.");
      return;
    }
    const whatsappNumbers = ["919689044025", "917722082626"];
    const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
    const selectedNumber = whatsappNumbers[randomIndex];
    const message = `🏆 CADD SOLUTIONS Professional Inquiry:%0A%0A👤 Name: ${encodeURIComponent(formData.name)}%0A📞 Mobile: ${encodeURIComponent(formData.number)}%0A📧 Email: ${encodeURIComponent(formData.email)}%0A📍 Location: ${encodeURIComponent(formData.location)}%0A📚 Course: ${encodeURIComponent(formData.inquiryCourse)}%0A🎯 Inquiry Type: ${encodeURIComponent(formData.inquiryType)}%0A💬 Message: ${encodeURIComponent(formData.comments || "No additional message")}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${selectedNumber}&text=${message}&source=&data=&app_absent=0`;
    window.open(whatsappURL, "_blank");
  };
  return <section id="contact" className="professional-section bg-gradient-to-br from-white via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-yellow-900 dark:to-amber-900 transition-colors duration-300">
      <div className="professional-container">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="professional-margin">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Professional Center
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with our professional team and we'll respond within 24 hours with comprehensive solutions
          </p>
        </motion.div>

        <div className="professional-grid professional-grid-2 gap-16">
          {/* Contact Information with Media Frame */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="professional-spacing">
            <Card className="professional-card text-slate-50">
              <CardHeader>
                <CardTitle className="professional-subheading flex items-center gap-3">
                  <MapPin className="professional-icon w-8 h-8" />
                  Our Professional Centers
                </CardTitle>
              </CardHeader>
              <CardContent className="professional-spacing">
                {/* Solapur Location */}
                <div className="professional-spacing-sm">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-white text-professionally-aligned">🏢 Solapur Training Center</h4>
                  <p className="professional-text text-left">
                    CADD Solutions, 42, 1st Floor, Apurva Building, Near Jumbo Xerox, Saat Rasta, Solapur - 413001
                  </p>
                  <div className="text-professionally-aligned">
                    <a href="https://www.google.com/maps/place/CADD+SOLUTIONS+SOLAPUR/@17.6612065,75.9064828,17z/data=!4m6!3m5!1s0x3bc5dbb20957843f:0xabcfbedec349e16a!8m2!3d17.661217!4d75.9063813!16s%2Fg%2F11fjm9zvqj?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="professional-button inline-flex items-center gap-2 text-lg">
                      🗺️ View Location on Google Maps
                    </a>
                  </div>
                </div>

                {/* Karad Location */}
                <div className="professional-spacing-sm border-t-2 border-yellow-200 dark:border-yellow-700 pt-8">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-white text-professionally-aligned">🏢 Karad Training Center</h4>
                  <p className="professional-text text-left">
                    CADD Solutions, Dargah Mohalla, Mangalwar Peth Karad, Karad, Maharashtra 415110
                  </p>
                  <div className="text-professionally-aligned">
                    <a href="https://www.google.com/maps/place/CADD+Solutions+Karad/@17.2913639,74.1844106,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc18321c7051a65:0x628fcdffe489b228!8m2!3d17.2913639!4d74.1844106!16s%2Fg%2F11rmz88jc7?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="professional-button inline-flex items-center gap-2 text-lg">
                      🗺️ View Location on Google Maps
                    </a>
                  </div>
                </div>

                {/* Professional Map Frame */}
                <div className="professional-margin">
                  <div className="media-frame">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5487723167615!2d75.91448977511485!3d17.68089478303488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dc71d82b41f7%3A0xbbe2529da65e59c3!2sCADD%20Solutions%2C%2042%201st%20Floor%2C%20Apurva%20Building%2C%20Near%20Jumbo%20Xerox%2C%20Saat%20Rasta%2C%20Solapur%2C%20Maharashtra%20413001!5e0!3m2!1sen!2sin!4v1710247028736!5m2!1sen!2sin" width="100%" height="300" style={{
                    border: 0,
                    borderRadius: '12px'
                  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-2xl" />
                  </div>
                </div>

                {/* Professional Contact Details */}
                <div className="professional-spacing border-t-2 border-yellow-200 dark:border-yellow-700 pt-8">
                  <div className="professional-spacing-sm">
                    <div className="flex items-center gap-4 text-lg">
                      <Phone className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">📞 +91 96890 44025</span>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                      <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      <a href="mailto:tambolimahibub@gmail.com" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                        ✉️ tambolimahibub@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                      <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">🕘 Mon-Sat: 9:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Send us a Professional Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="professional-spacing">
                  <div className="professional-grid professional-grid-2 gap-6">
                    <div>
                      <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleInputChange} className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg" />
                    </div>
                    <div>
                      <input type="tel" name="number" placeholder="Mobile Number *" required value={formData.number} onChange={handleInputChange} className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg" />
                    </div>
                  </div>

                  <div className="professional-grid professional-grid-2 gap-6">
                    <div>
                      <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleInputChange} className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg" />
                    </div>
                    <div>
                      <select name="location" required value={formData.location} onChange={handleInputChange} className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg">
                        <option value="" disabled>Select Training Location *</option>
                        <option value="Solapur">🏢 Solapur Center</option>
                        <option value="Karad">🏢 Karad Center</option>
                      </select>
                    </div>
                  </div>

                  <div className="professional-grid professional-grid-2 gap-6">
                    <div>
                      <select name="inquiryCourse" required value={formData.inquiryCourse} onChange={handleInputChange} className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg">
                        <option value="" disabled>Select Professional Course *</option>
                        {courses.map(course => <option key={course} value={course}>📚 {course}</option>)}
                      </select>
                    </div>
                    <div>
                      <select name="inquiryType" required value={formData.inquiryType} onChange={handleInputChange} className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg">
                        <option value="" disabled>Select Inquiry Type *</option>
                        {inquiryTypes.map(type => <option key={type} value={type}>🎯 {type}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea name="comments" placeholder="Your Professional Message (Optional)" rows={6} value={formData.comments} onChange={handleInputChange} className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-vertical text-lg" />
                  </div>

                  <Button type="submit" className="w-full gradient-bg-golden hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 text-white py-4 px-8 rounded-xl flex items-center justify-center gap-3 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Send className="w-6 h-6" />
                    Send Us a Professional Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Professional Review Summary with Media Frame */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="professional-margin">
          <Card className="professional-card">
            <CardContent className="professional-padding">
              <h3 className="text-3xl font-bold text-professionally-aligned text-gray-800 dark:text-white mb-6">
                🏆 CADD SOLUTIONS - Professional Training Excellence
              </h3>
              <p className="professional-text">
                CADD Solutions stands as a prestigious institution in professional engineering design, software training, and consultancy services. We are recognized for our excellence in technical education, industry expertise, and commitment to student success. Our state-of-the-art facilities in <strong>Solapur & Karad</strong> provide the perfect environment for professional development and career advancement.
              </p>
              <p className="text-professionally-aligned text-gray-700 dark:text-gray-300 text-xl">
                ⭐⭐⭐⭐⭐ Consistently rated as the top training center for professional excellence and student satisfaction.
              </p>
              
              {/* Mobile-only professional image with media frame */}
              <div className="block md:hidden professional-margin">
                <div className="media-frame max-w-md mx-auto">
                  <img src="/imgs/portfolio/caddsol.jpg" alt="CADD Solutions Professional Training Center" className="w-full rounded-xl shadow-2xl" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>;
};
export default EnhancedContact;