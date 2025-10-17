
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, FolderOpen, GraduationCap, Users, X, UserPlus, Calendar, ClipboardList, BarChart3, Settings, FileText, CheckSquare, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { EmployeeManagement } from '@/components/admin/EmployeeManagement';
import { TaskManagement } from '@/components/admin/TaskManagement';
import { AnalyticsDashboard } from '@/components/admin/AnalyticsDashboard';
import { ApiService } from '@/services/api';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ userid: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (credentials.userid === 'Cadd' && credentials.password === 'Cadd@123') {
      setIsAuthenticated(true);
      setShowWelcome(true);
      setLoginError('');
      toast({
        title: "Login Successful",
        description: "Welcome to CADD Solutions Admin Dashboard!",
      });
    } else {
      setLoginError('Invalid credentials. Please try again.');
      toast({
        title: "Login Failed",
        description: "Invalid userid or password.",
        variant: "destructive"
      });
    }
  };

  const handleFeatureAccess = (feature: string) => {
    setCurrentView(feature.toLowerCase().replace(/\s+/g, '-'));
    toast({
      title: `${feature} Access`,
      description: `Opening ${feature} management system.`,
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('dashboard');
    ApiService.logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'employee-management':
        return <EmployeeManagement />;
      case 'task-assignment':
        return <TaskManagement />;
      case 'reports-&-analytics':
        return <AnalyticsDashboard />;
      default:
        return renderDashboard();
    }
  };

  const renderDashboard = () => (
    <>
      {/* Admin Features Grid */}
      <div className="professional-grid professional-grid-3 gap-8">
        {/* Employee Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <UserPlus className="professional-icon w-12 h-12" />
                Employee Management
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Complete staff and trainer management system</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Employee Management')}
                className="professional-button w-full text-lg"
              >
                👥 Manage Employees
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Attendance Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <CheckSquare className="professional-icon w-12 h-12" />
                Attendance Management
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Track attendance and generate reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Attendance Management')}
                className="professional-button w-full text-lg"
              >
                📊 Track Attendance
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Student Enrollment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <Users className="professional-icon w-12 h-12" />
                Student Enrollment
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Manage student registrations and profiles</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Student Enrollment')}
                className="professional-button w-full text-lg"
              >
                🎓 Manage Students
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certificate Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <GraduationCap className="professional-icon w-12 h-12" />
                Certificate Dispatch
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Generate and manage certificates</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Certificate Management')}
                className="professional-button w-full text-lg"
              >
                🏆 Manage Certificates
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Task Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <ClipboardList className="professional-icon w-12 h-12" />
                Task Assignment
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Assign and track employee tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Task Assignment')}
                className="professional-button w-full text-lg"
              >
                📋 Manage Tasks
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reports & Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <BarChart3 className="professional-icon w-12 h-12" />
                Reports & Analytics
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Comprehensive business analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Reports & Analytics')}
                className="professional-button w-full text-lg"
              >
                📈 View Analytics
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Media Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <Image className="professional-icon w-12 h-12" />
                Media Management
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Upload and manage training materials</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Media Management')}
                className="professional-button w-full text-lg"
              >
                🖼️ Manage Media
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Document Storage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <FolderOpen className="professional-icon w-12 h-12" />
                Document Storage
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Centralized document management</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('Document Storage')}
                className="professional-button w-full text-lg"
              >
                📁 Manage Documents
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* System Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="professional-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl dark:text-white">
                <Settings className="professional-icon w-12 h-12" />
                System Settings
              </CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Configure system preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleFeatureAccess('System Settings')}
                className="professional-button w-full text-lg"
              >
                ⚙️ System Config
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Professional Statistics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="professional-margin"
      >
        <Card className="professional-card">
          <CardHeader>
            <CardTitle className="professional-subheading">📊 Professional Training Center Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="professional-grid professional-grid-4 gap-8">
              <div className="text-professionally-aligned">
                <div className="professional-stats">5000+</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Active Students</div>
              </div>
              <div className="text-professionally-aligned">
                <div className="professional-stats">25</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Professional Courses</div>
              </div>
              <div className="text-professionally-aligned">
                <div className="professional-stats">15</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Expert Trainers</div>
              </div>
              <div className="text-professionally-aligned">
                <div className="professional-stats">95%</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Placement Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-900 dark:to-yellow-900 flex items-center justify-center transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="professional-card shadow-2xl">
            <CardHeader className="text-professionally-aligned">
              <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">🏆 Admin Login</CardTitle>
              <CardDescription className="dark:text-gray-300 text-lg">Enter your credentials to access the professional admin panel</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="professional-spacing">
                <div>
                  <Input
                    type="text"
                    placeholder="User ID"
                    value={credentials.userid}
                    onChange={(e) => setCredentials({...credentials, userid: e.target.value})}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white px-6 py-4 text-lg rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white px-6 py-4 text-lg rounded-xl"
                    required
                  />
                </div>

                {loginError && (
                  <Alert variant="destructive">
                    <AlertDescription>{loginError}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="professional-button w-full text-lg">
                  🔐 Access Admin Panel
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-900 dark:to-yellow-900 transition-colors duration-300">
      {/* Welcome Popup */}
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl max-w-lg mx-4 text-professionally-aligned"
          >
            <div className="text-8xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Welcome Admin!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">You have successfully accessed the CADD Solutions Professional Admin Dashboard.</p>
            <Button onClick={() => setShowWelcome(false)} className="professional-button text-lg">
              <X className="w-5 h-5 mr-2" />
              Continue to Dashboard
            </Button>
          </motion.div>
        </motion.div>
      )}

      <div className="professional-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="professional-margin"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="professional-heading">🏆 CADD Solutions Admin Dashboard</h1>
              <p className="professional-text">Professional Training Management System - Comprehensive Control Panel</p>
            </div>
            <div className="flex gap-4">
              {currentView !== 'dashboard' && (
                <Button
                  onClick={() => setCurrentView('dashboard')}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Button>
              )}
              <Button
                onClick={handleLogout}
                variant="destructive"
              >
                Logout
              </Button>
            </div>
          </div>
        </motion.div>

        {renderCurrentView()}
      </div>
    </div>
  );
};

export default Admin;
