// API Service Layer - Simulates backend calls with in-memory data
import { 
  Employee, 
  Attendance, 
  Student, 
  Certificate, 
  Task, 
  Analytics, 
  AdminSettings, 
  AuthResponse, 
  ApiResponse 
} from '@/types/api';

// Simulated delay for API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// In-memory data storage
class InMemoryDatabase {
  private employees: Employee[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@company.com',
      position: 'Software Engineer',
      department: 'IT',
      salary: 75000,
      joinDate: '2023-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      position: 'Project Manager',
      department: 'IT',
      salary: 85000,
      joinDate: '2022-08-20',
      status: 'active'
    }
  ];

  private attendance: Attendance[] = [
    {
      id: '1',
      employeeId: '1',
      employeeName: 'John Smith',
      date: '2024-01-18',
      checkIn: '09:00',
      checkOut: '17:30',
      status: 'present',
      workingHours: 8.5
    }
  ];

  private students: Student[] = [
    {
      id: '1',
      name: 'Alice Brown',
      email: 'alice.brown@email.com',
      course: 'Web Development',
      enrollmentDate: '2024-01-10',
      status: 'active',
      grade: 'A'
    },
    {
      id: '2',
      name: 'Bob Wilson',
      email: 'bob.wilson@email.com',
      course: 'Data Science',
      enrollmentDate: '2024-01-05',
      status: 'active',
      grade: 'B+'
    }
  ];

  private certificates: Certificate[] = [
    {
      id: '1',
      studentId: '1',
      studentName: 'Alice Brown',
      course: 'Web Development',
      issueDate: '2024-01-15',
      certificateNumber: 'CERT-2024-001',
      status: 'issued'
    }
  ];

  private tasks: Task[] = [
    {
      id: '1',
      title: 'Update Employee Database',
      description: 'Migrate employee records to new system',
      assignedTo: 'John Smith',
      assignedBy: 'Admin',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2024-01-25',
      createdDate: '2024-01-18'
    }
  ];

  private settings: AdminSettings = {
    siteName: 'Admin Dashboard',
    adminEmail: 'admin@company.com',
    maxEmployees: 1000,
    maxStudents: 5000,
    autoBackup: true,
    emailNotifications: true,
    maintenanceMode: false
  };

  // Employee Methods
  getEmployees(): Employee[] {
    return [...this.employees];
  }

  getEmployee(id: string): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  addEmployee(employee: Omit<Employee, 'id'>): Employee {
    const newEmployee: Employee = {
      ...employee,
      id: (this.employees.length + 1).toString()
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  updateEmployee(id: string, updates: Partial<Employee>): Employee | null {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index === -1) return null;
    
    this.employees[index] = { ...this.employees[index], ...updates };
    return this.employees[index];
  }

  deleteEmployee(id: string): boolean {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index === -1) return false;
    
    this.employees.splice(index, 1);
    return true;
  }

  // Attendance Methods
  getAttendance(): Attendance[] {
    return [...this.attendance];
  }

  markAttendance(attendance: Omit<Attendance, 'id'>): Attendance {
    const newAttendance: Attendance = {
      ...attendance,
      id: (this.attendance.length + 1).toString()
    };
    this.attendance.push(newAttendance);
    return newAttendance;
  }

  // Student Methods
  getStudents(): Student[] {
    return [...this.students];
  }

  getStudent(id: string): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  addStudent(student: Omit<Student, 'id'>): Student {
    const newStudent: Student = {
      ...student,
      id: (this.students.length + 1).toString()
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: string, updates: Partial<Student>): Student | null {
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) return null;
    
    this.students[index] = { ...this.students[index], ...updates };
    return this.students[index];
  }

  deleteStudent(id: string): boolean {
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) return false;
    
    this.students.splice(index, 1);
    return true;
  }

  // Certificate Methods
  getCertificates(): Certificate[] {
    return [...this.certificates];
  }

  generateCertificate(certificate: Omit<Certificate, 'id' | 'certificateNumber'>): Certificate {
    const newCertificate: Certificate = {
      ...certificate,
      id: (this.certificates.length + 1).toString(),
      certificateNumber: `CERT-2024-${String(this.certificates.length + 1).padStart(3, '0')}`
    };
    this.certificates.push(newCertificate);
    return newCertificate;
  }

  // Task Methods
  getTasks(): Task[] {
    return [...this.tasks];
  }

  getTask(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Omit<Task, 'id'>): Task {
    const newTask: Task = {
      ...task,
      id: (this.tasks.length + 1).toString()
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, updates: Partial<Task>): Task | null {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) return null;
    
    this.tasks[index] = { ...this.tasks[index], ...updates };
    return this.tasks[index];
  }

  deleteTask(id: string): boolean {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    
    this.tasks.splice(index, 1);
    return true;
  }

  // Analytics Methods
  getAnalytics(): Analytics {
    const departmentStats = this.employees.reduce((acc, emp) => {
      const existing = acc.find(stat => stat.department === emp.department);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ department: emp.department, count: 1 });
      }
      return acc;
    }, [] as { department: string; count: number }[]);

    const courseEnrollments = this.students.reduce((acc, student) => {
      const existing = acc.find(course => course.course === student.course);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ course: student.course, count: 1 });
      }
      return acc;
    }, [] as { course: string; count: number }[]);

    return {
      totalEmployees: this.employees.length,
      totalStudents: this.students.length,
      activeTasks: this.tasks.filter(task => task.status !== 'completed').length,
      completedCertificates: this.certificates.filter(cert => cert.status === 'issued').length,
      attendanceRate: 92.5,
      monthlyRevenue: 125000,
      departmentStats,
      courseEnrollments
    };
  }

  // Settings Methods
  getSettings(): AdminSettings {
    return { ...this.settings };
  }

  updateSettings(updates: Partial<AdminSettings>): AdminSettings {
    this.settings = { ...this.settings, ...updates };
    return this.settings;
  }
}

// Singleton instance
const db = new InMemoryDatabase();

// API Service Class
export class ApiService {
  private static token: string | null = null;
  
  // Authentication
  static async login(username: string, password: string): Promise<ApiResponse<AuthResponse>> {
    await delay(1000);
    
    // Hardcoded credentials
    if (username === 'admin' && password === 'admin123') {
      const token = 'mock-jwt-token-' + Date.now();
      this.token = token;
      
      return {
        success: true,
        data: {
          token,
          user: {
            id: '1',
            username: 'admin',
            email: 'admin@company.com',
            role: 'administrator'
          }
        }
      };
    }
    
    return {
      success: false,
      error: 'Invalid credentials'
    };
  }

  static logout(): void {
    this.token = null;
  }

  static isAuthenticated(): boolean {
    return this.token !== null;
  }

  // Employee API
  static async getEmployees(): Promise<ApiResponse<Employee[]>> {
    await delay(500);
    return {
      success: true,
      data: db.getEmployees()
    };
  }

  static async getEmployee(id: string): Promise<ApiResponse<Employee>> {
    await delay(300);
    const employee = db.getEmployee(id);
    
    if (!employee) {
      return {
        success: false,
        error: 'Employee not found'
      };
    }
    
    return {
      success: true,
      data: employee
    };
  }

  static async createEmployee(employee: Omit<Employee, 'id'>): Promise<ApiResponse<Employee>> {
    await delay(800);
    
    try {
      const newEmployee = db.addEmployee(employee);
      return {
        success: true,
        data: newEmployee,
        message: 'Employee created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create employee'
      };
    }
  }

  static async updateEmployee(id: string, updates: Partial<Employee>): Promise<ApiResponse<Employee>> {
    await delay(600);
    
    const updatedEmployee = db.updateEmployee(id, updates);
    
    if (!updatedEmployee) {
      return {
        success: false,
        error: 'Employee not found'
      };
    }
    
    return {
      success: true,
      data: updatedEmployee,
      message: 'Employee updated successfully'
    };
  }

  static async deleteEmployee(id: string): Promise<ApiResponse<void>> {
    await delay(500);
    
    const success = db.deleteEmployee(id);
    
    if (!success) {
      return {
        success: false,
        error: 'Employee not found'
      };
    }
    
    return {
      success: true,
      message: 'Employee deleted successfully'
    };
  }

  // Attendance API
  static async getAttendance(): Promise<ApiResponse<Attendance[]>> {
    await delay(400);
    return {
      success: true,
      data: db.getAttendance()
    };
  }

  static async markAttendance(attendance: Omit<Attendance, 'id'>): Promise<ApiResponse<Attendance>> {
    await delay(600);
    
    try {
      const newAttendance = db.markAttendance(attendance);
      return {
        success: true,
        data: newAttendance,
        message: 'Attendance marked successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to mark attendance'
      };
    }
  }

  // Student API
  static async getStudents(): Promise<ApiResponse<Student[]>> {
    await delay(500);
    return {
      success: true,
      data: db.getStudents()
    };
  }

  static async createStudent(student: Omit<Student, 'id'>): Promise<ApiResponse<Student>> {
    await delay(800);
    
    try {
      const newStudent = db.addStudent(student);
      return {
        success: true,
        data: newStudent,
        message: 'Student enrolled successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to enroll student'
      };
    }
  }

  static async updateStudent(id: string, updates: Partial<Student>): Promise<ApiResponse<Student>> {
    await delay(600);
    
    const updatedStudent = db.updateStudent(id, updates);
    
    if (!updatedStudent) {
      return {
        success: false,
        error: 'Student not found'
      };
    }
    
    return {
      success: true,
      data: updatedStudent,
      message: 'Student updated successfully'
    };
  }

  static async deleteStudent(id: string): Promise<ApiResponse<void>> {
    await delay(500);
    
    const success = db.deleteStudent(id);
    
    if (!success) {
      return {
        success: false,
        error: 'Student not found'
      };
    }
    
    return {
      success: true,
      message: 'Student deleted successfully'
    };
  }

  // Certificate API
  static async getCertificates(): Promise<ApiResponse<Certificate[]>> {
    await delay(400);
    return {
      success: true,
      data: db.getCertificates()
    };
  }

  static async generateCertificate(certificate: Omit<Certificate, 'id' | 'certificateNumber'>): Promise<ApiResponse<Certificate>> {
    await delay(1000);
    
    try {
      const newCertificate = db.generateCertificate(certificate);
      return {
        success: true,
        data: newCertificate,
        message: 'Certificate generated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to generate certificate'
      };
    }
  }

  // Task API
  static async getTasks(): Promise<ApiResponse<Task[]>> {
    await delay(400);
    return {
      success: true,
      data: db.getTasks()
    };
  }

  static async createTask(task: Omit<Task, 'id'>): Promise<ApiResponse<Task>> {
    await delay(700);
    
    try {
      const newTask = db.addTask(task);
      return {
        success: true,
        data: newTask,
        message: 'Task created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create task'
      };
    }
  }

  static async updateTask(id: string, updates: Partial<Task>): Promise<ApiResponse<Task>> {
    await delay(600);
    
    const updatedTask = db.updateTask(id, updates);
    
    if (!updatedTask) {
      return {
        success: false,
        error: 'Task not found'
      };
    }
    
    return {
      success: true,
      data: updatedTask,
      message: 'Task updated successfully'
    };
  }

  static async deleteTask(id: string): Promise<ApiResponse<void>> {
    await delay(500);
    
    const success = db.deleteTask(id);
    
    if (!success) {
      return {
        success: false,
        error: 'Task not found'
      };
    }
    
    return {
      success: true,
      message: 'Task deleted successfully'
    };
  }

  // Analytics API
  static async getAnalytics(): Promise<ApiResponse<Analytics>> {
    await delay(800);
    return {
      success: true,
      data: db.getAnalytics()
    };
  }

  // Settings API
  static async getSettings(): Promise<ApiResponse<AdminSettings>> {
    await delay(300);
    return {
      success: true,
      data: db.getSettings()
    };
  }

  static async updateSettings(updates: Partial<AdminSettings>): Promise<ApiResponse<AdminSettings>> {
    await delay(600);
    
    try {
      const updatedSettings = db.updateSettings(updates);
      return {
        success: true,
        data: updatedSettings,
        message: 'Settings updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update settings'
      };
    }
  }
}