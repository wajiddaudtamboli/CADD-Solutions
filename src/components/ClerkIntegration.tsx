
import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ClerkIntegration = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Card className="professional-card">
        <CardHeader>
          <CardTitle className="professional-subheading text-center">
            🔐 Professional Authentication System
          </CardTitle>
          <CardDescription className="text-lg text-center">
            Secure access to CADD Solutions training management system
          </CardDescription>
        </CardHeader>
        <CardContent className="professional-padding">
          <SignedOut>
            <div className="text-professionally-aligned professional-spacing">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Access Your Professional Account
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                Sign in to access your training dashboard, courses, and professional development tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <SignInButton>
                  <Button className="professional-button text-lg px-8 py-4">
                    🔑 Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-white text-yellow-700 border-2 border-yellow-600 hover:bg-yellow-50 font-semibold text-lg px-8 py-4 rounded-xl">
                    📝 Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="text-professionally-aligned professional-spacing">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                🎉 Welcome to Your Professional Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                You are successfully authenticated and can now access all professional features.
              </p>
              <div className="flex items-center justify-center gap-6">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-12 h-12",
                      userButtonPopoverCard: "professional-card"
                    }
                  }}
                />
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    Professional Account Active
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Click your profile to manage settings
                  </p>
                </div>
              </div>
            </div>
          </SignedIn>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClerkIntegration;
