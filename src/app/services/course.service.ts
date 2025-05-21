// src/app/services/course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// ✅ عرف interface ديال Course إذا ما كانش
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  user: User;  // إضافة خاصية المدرب
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');
      if (token) {
        return new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
      }
    }
    return new HttpHeaders(); // هيدر فارغ إذا ماكانش توكن
  }

  // 🟢 جلب جميع الدورات
  getCourses(): Observable<Course[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Course[]>(`${this.apiUrl}/courses`, { headers });
  }

  // 🟢 تسجيل فـ دورة
  enroll(courseId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/courses/${courseId}/enroll`, {}, { headers });
  }

  // 🟢 جلب الدورات الخاصة بالمستخدم
  getMyCourses(): Observable<Course[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Course[]>(`${this.apiUrl}/my-courses`, { headers });
    
  }

  createCourse(courseData: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/courses`, courseData, { headers });
  }


 


  addCourseMaterial(courseId: number, material: any) {
    return this.http.post<any>(`/api/courses/${courseId}/materials`, material);
  }


  getMaterials(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/courses/${courseId}/materials`);
  }

  uploadMaterial(courseId: number, formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/courses/${courseId}/materials`, formData);
  }



  

  
}
