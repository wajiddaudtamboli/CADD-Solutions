
export interface ContactFormData {
  name: string;
  number: string;
  email: string;
  location: string;
  inquiryCourse: string;
  inquiryType: string;
  comments: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Simulate API calls - In a real application, these would be actual HTTP requests
export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful form submission
      console.log('Form submitted:', formData);
      
      // In a real app, this would send to your backend
      resolve({
        success: true,
        message: 'Your inquiry has been submitted successfully!',
        data: { id: Date.now() }
      });
    }, 1000);
  });
};

export const getCourses = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Courses fetched successfully',
        data: [
          { id: 1, name: 'AutoCAD', price: 15000, duration: '3 months' },
          { id: 2, name: 'Python & ML', price: 20000, duration: '4 months' },
          { id: 3, name: 'SolidWorks', price: 18000, duration: '3.5 months' },
          // Add more courses as needed
        ]
      });
    }, 500);
  });
};

export const getTestimonials = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Testimonials fetched successfully',
        data: [
          {
            id: 1,
            name: 'Irfan Shaikh',
            role: 'Associate System Administrator',
            company: 'Softenger',
            content: 'CADD Solutions shaped my career with practical training!',
            rating: 5
          },
          // Add more testimonials
        ]
      });
    }, 500);
  });
};
