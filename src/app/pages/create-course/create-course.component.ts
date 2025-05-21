import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [CommonModule, FormsModule], // تأكد من استيراد FormsModule
  templateUrl: './create-course.component.html',
})
export class CreateCourseComponent {
  course = {
    title: '',
    description: '',
    price: null,
    category: '',
    start_date: '',
    end_date: '',
  };
  
  isModalOpen: boolean = true;

  constructor(private courseService: CourseService, private router: Router) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  createCourse() {
    this.courseService.createCourse(this.course).subscribe(
      (response) => {
        alert('تمت إضافة الدورة بنجاح!');
        this.router.navigate(['/courses']);
        this.closeModal();
      },
      (error) => {
        console.error('Error creating course:', error); // طبع الخطأ الكامل فـ الكونسول
        alert('حدث خطأ أثناء إضافة الدورة: ' + (error?.error?.message || 'تحقق من البيانات'));
      }
    );
  }
}
