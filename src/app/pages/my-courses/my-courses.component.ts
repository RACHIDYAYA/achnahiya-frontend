import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getMyCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
