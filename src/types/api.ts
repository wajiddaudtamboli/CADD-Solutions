// API Types for Admin Dashboard
export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

export interface Attendance {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  status: 'present' | 'absent' | 'late';
  workingHours?: number;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  enrollmentDate: string;
  status: 'active' | 'completed' | 'dropped';
  grade?: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  studentName: string;
  course: string;
  issueDate: string;
  certificateNumber: string;
  status: 'issued' | 'pending' | 'cancelled';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  assignedBy: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  createdDate: string;
}

export interface Analytics {
  totalEmployees: number;
  totalStudents: number;
  activeTasks: number;
  completedCertificates: number;
  attendanceRate: number;
  monthlyRevenue: number;
  departmentStats: { department: string; count: number }[];
  courseEnrollments: { course: string; count: number }[];
}

export interface AdminSettings {
  siteName: string;
  adminEmail: string;
  maxEmployees: number;
  maxStudents: number;
  autoBackup: boolean;
  emailNotifications: boolean;
  maintenanceMode: boolean;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}