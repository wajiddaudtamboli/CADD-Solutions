
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, FolderOpen, GraduationCap, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ userid: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (credentials.userid === 'Cadd' && credentials.password === 'Cadd@123') {
      setIsAuthenticated(true);
      setShowWelcome(true);
      setLoginError('');
      toast({
        title: "Login Successful",
        description: "Welcome to Admin Dashboard!",
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

  const handleFileUpload = (type: string) => {
    toast({
      title: "Upload Feature",
      description: `${type} upload functionality would be implemented here.`,
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Admin Login</CardTitle>
              <CardDescription className="dark:text-gray-300">Enter your credentials to access the admin panel</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="User ID"
                    value={credentials.userid}
                    onChange={(e) => setCredentials({...credentials, userid: e.target.value})}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                
                {loginError && (
                  <Alert variant="destructive">
                    <AlertDescription>{loginError}</AlertDescription>
                  </Alert>
                )}
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md mx-4 text-center"
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Welcome Admin!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">You have successfully logged into the admin dashboard.</p>
            <Button onClick={() => setShowWelcome(false)} className="bg-blue-600 hover:bg-blue-700">
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your training center content and data</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Image className="w-5 h-5 text-blue-600" />
                  Image Management
                </CardTitle>
                <CardDescription className="dark:text-gray-300">Upload and manage course images, gallery photos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleFileUpload('Image')}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Images
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Folder Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <FolderOpen className="w-5 h-5 text-green-600" />
                  Folder Management
                </CardTitle>
                <CardDescription className="dark:text-gray-300">Organize course materials and documents</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleFileUpload('Folder')}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Manage Folders
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Scholarship Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  Scholarship Programs
                </CardTitle>
                <CardDescription className="dark:text-gray-300">Manage scholarship courses and eligibility</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleFileUpload('Scholarship')}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Manage Scholarships
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Course Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Upload className="w-5 h-5 text-orange-600" />
                  Course Content
                </CardTitle>
                <CardDescription className="dark:text-gray-300">Upload course brochures and materials</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleFileUpload('Course')}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Content
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Student Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Users className="w-5 h-5 text-red-600" />
                  Student Data
                </CardTitle>
                <CardDescription className="dark:text-gray-300">Manage student records and enrollment</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleFileUpload('Student')}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Manage Students
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Quick Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Images</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">25</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Course Folders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Scholarships</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
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
