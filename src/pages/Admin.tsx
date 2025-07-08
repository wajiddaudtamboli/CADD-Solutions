
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, FolderOpen, GraduationCap, Users, X, UserPlus, Calendar, ClipboardList, BarChart3, Settings, FileText, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface AdminUser {
  admin_id: string;
  username: string;
  email: string;
  full_name: string;
  role: string;
  session_token?: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [credentials, setCredentials] = useState({ userid: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Check for existing session on component mount
  useEffect(() => {
    const checkSession = () => {
      const sessionToken = localStorage.getItem('admin_session_token');
      const adminData = localStorage.getItem('admin_user_data');
      
      if (sessionToken && adminData) {
        try {
          const userData = JSON.parse(adminData);
          setAdminUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error parsing admin data:', error);
          localStorage.removeItem('admin_session_token');
          localStorage.removeItem('admin_user_data');
        }
      }
    };

    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    
    try {
      const { data, error } = await supabase.rpc('validate_admin_login', {
        p_username: credentials.userid,
        p_password: credentials.password
      });

      if (error) {
        console.error('Login error:', error);
        setLoginError('An error occurred during login. Please try again.');
        toast({
          title: "Login Failed",
          description: "An error occurred during login.",
          variant: "destructive"
        });
        return;
      }

      if (data && data.length > 0) {
        const adminData = data[0];
        
        // Store session data
        localStorage.setItem('admin_session_token', adminData.session_token);
        localStorage.setItem('admin_user_data', JSON.stringify({
          admin_id: adminData.admin_id,
          username: adminData.username,
          email: adminData.email,
          full_name: adminData.full_name,
          role: adminData.role
        }));

        setAdminUser(adminData);
        setIsAuthenticated(true);
        setShowWelcome(true);
        setLoginError('');
        
        toast({
          title: "Login Successful",
          description: `Welcome back, ${adminData.full_name || adminData.username}!`,
        });
      } else {
        setLoginError('Invalid credentials. Please check your username and password.');
        toast({
          title: "Login Failed",
          description: "Invalid username or password.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An unexpected error occurred. Please try again.');
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session_token');
    localStorage.removeItem('admin_user_data');
    setIsAuthenticated(false);
    setAdminUser(null);
    setCredentials({ userid: '', password: '' });
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const handleFeatureAccess = (feature: string) => {
    toast({
      title: `${feature} Access`,
      description: `${feature} management system is now available for professional use.`,
    });
  };

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
                    disabled={isLoading}
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
                    disabled={isLoading}
                  />
                </div>
                
                {loginError && (
                  <Alert variant="destructive">
                    <AlertDescription>{loginError}</AlertDescription>
                  </Alert>
                )}
                
                <Button type="submit" className="professional-button w-full text-lg" disabled={isLoading}>
                  {isLoading ? '🔄 Authenticating...' : '🔐 Access Admin Panel'}
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
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Welcome {adminUser?.full_name || adminUser?.username}!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">You have successfully accessed the CADD Solutions Professional Admin Dashboard.</p>
            <Button onClick={() => setShowWelcome(false)} className="professional-button text-lg">
              <X className="w-5 h-5 mr-2" />
              Continue to Dashboard
            </Button>
          </motion.div>
        </motion.div>
      )}

      <div className="professional-container">
        {/* Header with logout button */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="professional-heading">🏆 CADD Solutions Admin Dashboard</h1>
            <p className="professional-text">Professional Training Management System - Comprehensive Control Panel</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Logged in as: <span className="font-semibold">{adminUser?.full_name || adminUser?.username}</span> ({adminUser?.role})
            </p>
          </motion.div>
          
          <Button onClick={handleLogout} variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
            Logout
          </Button>
        </div>

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
                  onClick={() => handleFeatureAccess('Task Management')}
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
                  <div className="professional-stats">500+</div>
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
      </div>
    </div>
  );
};

export default Admin;
