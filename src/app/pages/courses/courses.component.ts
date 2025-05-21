import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  imports: [CommonModule] // 👈 ajoute ça ici
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data: any) => this.courses = data,
      error: err => console.error(err)
    });
  }

  enroll(courseId: number) {
    this.courseService.enroll(courseId).subscribe({
      next: () => alert('تم الاشتراك في الدورة بنجاح'),
      error: () => alert('حدث خطأ أثناء الاشتراك')
    });
  }
}
