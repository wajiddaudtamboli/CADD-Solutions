
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Calendar, Bell, LogOut, Menu, CheckSquare, FileText, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const student = {
    name: 'Rajesh Patil',
    email: 'rajesh.patil@email.com',
    studentId: 'CADD2024001',
    joinDate: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'AutoCAD Professional Certification',
      progress: 85,
      status: 'In Progress',
      nextClass: '2024-01-15 10:00 AM',
      instructor: 'Prof. Rajesh Kumar'
    },
    {
      id: 2,
      title: 'SolidWorks Advanced Design',
      progress: 100,
      status: 'Completed',
      completedDate: '2023-12-20',
      instructor: 'Prof. Amit Sharma'
    }
  ];

  const upcomingClasses = [
    { id: 1, course: 'AutoCAD Professional', date: '2024-01-15', time: '10:00 AM - 12:00 PM', topic: '3D Modeling Fundamentals' },
    { id: 2, course: 'AutoCAD Professional', date: '2024-01-17', time: '10:00 AM - 12:00 PM', topic: 'Advanced 3D Features' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'attendance', label: 'Attendance', icon: CheckSquare },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'schedule', label: 'Class Schedule', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="professional-spacing">
            <div className="professional-grid professional-grid-4 gap-6">
              <Card className="gradient-bg-golden text-white">
                <CardContent className="professional-padding">
                  <div className="text-3xl font-bold">{enrolledCourses.length}</div>
                  <div className="text-yellow-100">Total Courses</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="professional-padding">
                  <div className="text-3xl font-bold">{enrolledCourses.filter(c => c.status === 'Completed').length}</div>
                  <div className="text-green-100">Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="professional-padding">
                  <div className="text-3xl font-bold">{enrolledCourses.filter(c => c.status === 'In Progress').length}</div>
                  <div className="text-orange-100">In Progress</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="professional-padding">
                  <div className="text-3xl font-bold">{upcomingClasses.length}</div>
                  <div className="text-purple-100">Upcoming Classes</div>
                </CardContent>
              </Card>
            </div>

            <div className="professional-grid professional-grid-2 gap-8">
              <Card className="professional-card">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white text-xl">📚 Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="professional-spacing-sm">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-white">✅ Assignment Submitted</div>
                        <div className="text-gray-600 dark:text-gray-400">AutoCAD 3D Modeling Project</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-white">🎓 Class Completed</div>
                        <div className="text-gray-600 dark:text-gray-400">SolidWorks Advanced Features</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="professional-card">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white text-xl">📅 Upcoming Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="professional-spacing-sm">
                    {upcomingClasses.slice(0, 3).map((class_, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <Calendar className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 dark:text-white">📖 {class_.topic}</div>
                          <div className="text-gray-600 dark:text-gray-400">
                            🗓️ {class_.date} • ⏰ {class_.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="professional-spacing">
            <h2 className="professional-subheading text-left">📚 My Professional Courses</h2>
            <div className="professional-grid professional-grid-2 gap-8">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="professional-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-gray-800 dark:text-white text-xl">{course.title}</CardTitle>
                      <Badge className={course.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'}>
                        {course.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg">👨‍🏫 Instructor: {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="professional-spacing-sm">
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="font-semibold text-gray-800 dark:text-white">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="gradient-bg-golden h-3 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      {course.nextClass && (
                        <div className="text-gray-600 dark:text-gray-400 text-lg">
                          📅 Next Class: {course.nextClass}
                        </div>
                      )}
                      {course.completedDate && (
                        <div className="text-green-600 dark:text-green-400 text-lg">
                          ✅ Completed: {course.completedDate}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="professional-spacing">
            <h2 className="professional-subheading text-left">📅 Professional Class Schedule</h2>
            <div className="professional-spacing">
              {upcomingClasses.map((class_) => (
                <Card key={class_.id} className="professional-card">
                  <CardContent className="professional-padding">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 gradient-bg-golden rounded-2xl flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">📖 {class_.topic}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-lg">📚 {class_.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-semibold text-gray-800 dark:text-white">🗓️ {class_.date}</div>
                        <div className="text-gray-600 dark:text-gray-400 text-lg">⏰ {class_.time}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-professionally-aligned">
            <Card className="professional-card">
              <CardContent className="professional-padding">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🚀 Feature Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  This professional feature is currently under development and will be available soon.
                </p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-yellow-900 dark:to-amber-900">
      <div className="flex">
        {/* Professional Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-r-2 border-yellow-200 dark:border-yellow-700 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between professional-padding border-b-2 border-yellow-200 dark:border-yellow-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">🎓 Student Portal</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              ✕
            </Button>
          </div>

          {/* Student Profile */}
          <div className="professional-padding border-b-2 border-yellow-200 dark:border-yellow-700">
            <div className="flex items-center gap-4">
              <div className="media-frame w-16 h-16">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{student.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{student.studentId}</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="professional-padding professional-spacing">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-lg ${
                  activeTab === item.id
                    ? 'gradient-bg-golden text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-6 h-6" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-6 right-6">
            <Button
              variant="outline"
              className="w-full flex items-center gap-3 border-2 border-yellow-200 dark:border-yellow-600 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900 text-lg py-4"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Header */}
          <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b-2 border-yellow-200 dark:border-yellow-700 professional-padding">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </Button>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {activeTab === 'dashboard' ? '🏆 Dashboard' : 
                 activeTab === 'courses' ? '📚 My Courses' :
                 activeTab === 'schedule' ? '📅 Schedule' :
                 `🔧 ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
              </h1>
              <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="professional-container">
            {renderContent()}
          </main>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default StudentPortal;
