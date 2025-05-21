import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CreateCourseComponent } from "../../pages/create-course/create-course.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

 

  menuOpen = false;

  constructor(private router: Router) {}

  // التحقق مما إذا كان المستخدم قد قام بتسجيل الدخول
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // عملية تسجيل الخروج
  logout(): void {
    localStorage.removeItem('token'); // إزالة التوكن من localStorage
    this.router.navigate(['/login']); // إعادة التوجيه إلى صفحة تسجيل الدخول
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // تغيير حالة القائمة الجوالة
  }


}

