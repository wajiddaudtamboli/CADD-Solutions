
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, CreditCard, Download, Calendar, Bell, LogOut, Menu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const student = {
    name: 'Rajesh Patil',
    email: 'rajesh.patil@email.com',
    studentId: 'CS2024001',
    joinDate: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'AutoCAD Complete Course',
      progress: 75,
      status: 'In Progress',
      nextClass: '2024-01-15 10:00 AM',
      instructor: 'Prof. Rajesh Kumar'
    },
    {
      id: 2,
      title: 'SolidWorks Professional',
      progress: 100,
      status: 'Completed',
      completedDate: '2023-12-20',
      instructor: 'Prof. Amit Sharma'
    }
  ];

  const paymentHistory = [
    { id: 1, course: 'AutoCAD Complete Course', amount: '₹15,000', date: '2024-01-01', status: 'Paid' },
    { id: 2, course: 'SolidWorks Professional', amount: '₹18,000', date: '2023-10-01', status: 'Paid' }
  ];

  const upcomingClasses = [
    { id: 1, course: 'AutoCAD Complete Course', date: '2024-01-15', time: '10:00 AM - 12:00 PM', topic: '3D Modeling Basics' },
    { id: 2, course: 'AutoCAD Complete Course', date: '2024-01-17', time: '10:00 AM - 12:00 PM', topic: 'Advanced 3D Features' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'payments', label: 'Payment History', icon: CreditCard },
    { id: 'certificates', label: 'Certificates', icon: Download },
    { id: 'schedule', label: 'Class Schedule', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-red-500 to-red-600 dark:from-blue-500 dark:to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                  <div className="text-red-100 dark:text-blue-100">Total Courses</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">{enrolledCourses.filter(c => c.status === 'Completed').length}</div>
                  <div className="text-green-100">Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">{enrolledCourses.filter(c => c.status === 'In Progress').length}</div>
                  <div className="text-orange-100">In Progress</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">{upcomingClasses.length}</div>
                  <div className="text-purple-100">Upcoming Classes</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">Assignment Submitted</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">AutoCAD 3D Modeling Project</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">Class Attended</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">SolidWorks Advanced Features</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Upcoming Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingClasses.slice(0, 3).map((class_, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Calendar className="w-5 h-5 text-red-600 dark:text-blue-600" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 dark:text-white">{class_.topic}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {class_.date} • {class_.time}
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-gray-800 dark:text-white">{course.title}</CardTitle>
                      <Badge className={course.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'}>
                        {course.status}
                      </Badge>
                    </div>
                    <CardDescription>Instructor: {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="text-sm font-medium text-gray-800 dark:text-white">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-500 to-red-600 dark:from-blue-500 dark:to-blue-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      {course.nextClass && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Next Class: {course.nextClass}
                        </div>
                      )}
                      {course.completedDate && (
                        <div className="text-sm text-green-600 dark:text-green-400">
                          Completed: {course.completedDate}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'payments':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Payment History</h2>
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-800 dark:text-white">Course</th>
                        <th className="text-left py-3 px-4 text-gray-800 dark:text-white">Amount</th>
                        <th className="text-left py-3 px-4 text-gray-800 dark:text-white">Date</th>
                        <th className="text-left py-3 px-4 text-gray-800 dark:text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentHistory.map((payment) => (
                        <tr key={payment.id} className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{payment.course}</td>
                          <td className="py-3 px-4 font-semibold text-gray-800 dark:text-white">{payment.amount}</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{payment.date}</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-green-500 text-white">{payment.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'certificates':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Certificates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {enrolledCourses.filter(c => c.status === 'Completed').map((course) => (
                <Card key={course.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-white">{course.title}</CardTitle>
                    <CardDescription>Certificate of Completion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Completed: {course.completedDate}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Instructor: {course.instructor}</div>
                      </div>
                      <Button className="bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-600 dark:to-purple-600 hover:from-red-700 hover:to-red-900 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Class Schedule</h2>
            <div className="space-y-4">
              {upcomingClasses.map((class_) => (
                <Card key={class_.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">{class_.topic}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{class_.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-800 dark:text-white">{class_.date}</div>
                        <div className="text-gray-600 dark:text-gray-400">{class_.time}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications</h2>
            <div className="space-y-4">
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Assignment Due Tomorrow</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Your AutoCAD 3D Modeling assignment is due tomorrow at 11:59 PM
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">New Study Material Available</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        New study materials have been uploaded for SolidWorks Advanced Features
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Student Portal</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              ×
            </Button>
          </div>

          {/* Student Profile */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{student.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{student.studentId}</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-red-600 dark:bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 border-red-200 dark:border-blue-400 text-red-600 dark:text-blue-400 hover:bg-red-50 dark:hover:bg-blue-50"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Header */}
          <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white capitalize">
                {activeTab.replace(/([A-Z])/g, ' $1').trim()}
              </h1>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="p-6">
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
