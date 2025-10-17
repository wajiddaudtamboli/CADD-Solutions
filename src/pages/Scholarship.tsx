
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, GraduationCap, Star, Users } from 'lucide-react';

const Scholarship = () => {
  const { translations } = useLanguage();

  const scholarships = [
    {
      title: "Merit-Based CAD Scholarship",
      description: "For students with exceptional academic performance in engineering",
      discount: "50%",
      eligibility: ["Engineering background", "80%+ academic score", "Portfolio review"],
      courses: ["AutoCAD", "SolidWorks", "CATIA"],
      duration: "3 months",
      seats: 10
    },
    {
      title: "Women in Engineering",
      description: "Empowering women in technical fields with comprehensive training",
      discount: "40%",
      eligibility: ["Female candidates", "Technical background preferred", "Interview required"],
      courses: ["Python", "Machine Learning", "Data Science"],
      duration: "4 months",
      seats: 15
    },
    {
      title: "Rural Development Program",
      description: "Special program for students from rural backgrounds",
      discount: "60%",
      eligibility: ["Rural background certificate", "Income criteria", "Basic computer knowledge"],
      courses: ["Basic CAD", "MS Office", "Programming Fundamentals"],
      duration: "6 months",
      seats: 20
    },
    {
      title: "Startup Innovation Grant",
      description: "For aspiring entrepreneurs with innovative project ideas",
      discount: "35%",
      eligibility: ["Business plan submission", "Innovation project", "Presentation required"],
      courses: ["Advanced CAD", "Project Management", "Business Tools"],
      duration: "3 months",
      seats: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Scholarship Programs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering deserving students with quality education through our comprehensive scholarship programs.
            Making technical education accessible to all.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">200+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Scholarships Awarded</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">₹50L+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Aid Provided</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">95%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">25+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Course Options</div>
          </div>
        </motion.div>

        {/* Scholarship Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-800 dark:text-white">{scholarship.title}</CardTitle>
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {scholarship.discount} OFF
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {scholarship.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Course Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {scholarship.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {scholarship.seats} seats
                    </div>
                  </div>

                  {/* Courses */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Included Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {scholarship.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Eligibility:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {scholarship.eligibility.map((criteria, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Application Process</CardTitle>
              <CardDescription className="dark:text-gray-300">Simple steps to apply for our scholarship programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Apply Online", desc: "Fill out the application form with required details" },
                  { step: 2, title: "Document Review", desc: "Submit necessary documents for verification" },
                  { step: 3, title: "Assessment", desc: "Participate in interview or skill assessment" },
                  { step: 4, title: "Enrollment", desc: "Get selected and start your learning journey" }
                ].map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Scholarship;
