import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
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

  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
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
    return <section id="contact" className="py-4 lg:py-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
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
      }} className="text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 lg:mb-6">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Professional Training Centers</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6 leading-tight">
            Connect with Our
            <span className="text-blue-600 dark:text-blue-400"> Expert Team</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Get personalized guidance from industry professionals. We respond within 24 hours with comprehensive solutions tailored to your career goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
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
        }} className="space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-white dark:bg-slate-800 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <CardTitle className="text-3xl font-bold flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <MapPin className="w-8 h-8" />
                  </div>
                  Training Centers & Contact
                </CardTitle>
                <p className="text-blue-100 text-lg mt-2">Visit our state-of-the-art facilities</p>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Solapur Location */}
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                      <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Solapur Training Center</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        CADD Solutions, 42, 1st Floor, Apurva Building, Near Jumbo Xerox, Saat Rasta, Solapur - 413001
                      </p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <a 
                          href="tel:+919689044025" 
                          className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          +91 96890 44025
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/CADD+SOLUTIONS+SOLAPUR/@17.6612065,75.9064828,17z/data=!4m6!3m5!1s0x3bc5dbb20957843f:0xabcfbedec349e16a!8m2!3d17.661217!4d75.9063813!16s%2Fg%2F11fjm9zvqj?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </div>

                {/* Karad Location */}
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                      <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Karad Training Center</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        CADD Solutions, Dargah Mohalla, Mangalwar Peth Karad, Karad, Maharashtra 415110
                      </p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <a 
                          href="tel:+917722082626" 
                          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          +91 77220 82626
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/CADD+Solutions+Karad/@17.2913639,74.1844106,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc18321c7051a65:0x628fcdffe489b228!8m2!3d17.2913639!4d74.1844106!16s%2Fg%2F11rmz88jc7?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </div>

                {/* Enhanced Map Frame */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl transform -rotate-1"></div>
                  <div className="relative bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-600">
                    <div className="overflow-hidden rounded-xl">
                      <div className="relative w-full h-0 pb-[75%] sm:pb-[65%] md:pb-[56.25%]"> {/* Responsive aspect ratio */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.8320168874044!2d75.90638157509577!3d17.661200683403405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbb20957843f%3A0xabcfbedec349e16a!2sCADD%20SOLUTIONS%20SOLAPUR!5e0!3m2!1sen!2sin!4v1729250932581!5m2!1sen!2sin"
                          className={`absolute top-0 left-0 w-full h-full border-0 transition-opacity duration-300 ${
                            mapLoaded ? 'opacity-100' : 'opacity-0'
                          }`}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Solapur Training Center Location"
                          onLoad={() => setMapLoaded(true)}
                          onError={() => setMapError(true)}
                        />

                        {/* Loading state */}
                        {!mapLoaded && !mapError && (
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Loading Solapur Map...</p>
                            </div>
                          </div>
                        )}

                        {/* Error/Fallback state */}
                        {mapError && (
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center cursor-pointer"
                               onClick={() => window.open('https://www.google.com/maps/place/CADD+SOLUTIONS+SOLAPUR/@17.6612065,75.9064828,17z/data=!4m6!3m5!1s0x3bc5dbb20957843f:0xabcfbedec349e16a!8m2!3d17.661217!4d75.9063813!16s%2Fg%2F11fjm9zvqj?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D', '_blank')}>
                            <div className="text-center p-4 hover:scale-105 transition-transform">
                              <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Solapur Training Center</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Click to open in Google Maps</p>
                            </div>
                          </div>
                        )}

                        {/* Static map image for better compatibility */}
                        <img
                          src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1729251032/solapur-map-static_q9xzlr.png"
                          alt="Solapur Training Center Location Map"
                          className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl ${
                            !mapLoaded && mapError ? 'opacity-100' : 'opacity-0 pointer-events-none'
                          } transition-opacity duration-300`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Solapur Training Center</span>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Live Location
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                      <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium">Call Us</div>
                      <a 
                        href="tel:+919689044025" 
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
                      >
                        +91 96890 44025
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                      <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Email</div>
                      <a href="mailto:tambolimahibub@gmail.com" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        Send Message
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">Hours</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">Mon-Sat 9AM-8PM</div>
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
        }} className="h-full">
            <Card className="overflow-hidden border-0 shadow-xl bg-white dark:bg-slate-800 backdrop-blur-sm h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-700 dark:to-slate-900 text-white p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-3 lg:mb-4">
                  <div className="p-2 lg:p-3 bg-white/20 rounded-xl">
                    <Send className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold">Get In Touch</CardTitle>
                    <p className="text-slate-200 text-base lg:text-lg mt-1">Send us a professional message</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
                <div className="mb-4 lg:mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">Contact Details</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">Please fill out the form below to get in touch with us</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Mobile Number</label>
                      <input
                        type="tel"
                        name="number"
                        placeholder="Enter your mobile number"
                        required
                        value={formData.number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Training Location</label>
                      <select
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                      >
                        <option value="" disabled>Select preferred location</option>
                        <option value="Solapur">Solapur Center</option>
                        <option value="Karad">Karad Center</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Course Interest</label>
                      <select
                        name="inquiryCourse"
                        required
                        value={formData.inquiryCourse}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                      >
                        <option value="" disabled>Select course of interest</option>
                        {courses.map(course => <option key={course} value={course}>{course}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                      >
                        <option value="" disabled>Select inquiry type</option>
                        {inquiryTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message (Optional)</label>
                    <textarea
                      name="comments"
                      placeholder="Tell us more about your requirements or any specific questions..."
                      rows={5}
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-vertical transition-all duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-8 rounded-xl flex items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>

                {/* Developer Credit */}
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="https://tech-world-ai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <span>Developer -</span>
                    <motion.span 
                      className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Wajid Daud Tamboli
                    </motion.span>
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default EnhancedContact;
