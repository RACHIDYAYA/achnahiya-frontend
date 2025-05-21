import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { CourseMaterialsComponent } from './components/course-materials/course-materials.component';

import { AuthGuard } from './guards/auth.guard'; // استيراد الـ guard

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // راوتات محمية
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'my-courses', component: MyCoursesComponent, canActivate: [AuthGuard] },
  { path: 'create-course', component: CreateCourseComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id/materials', component: CourseMaterialsComponent, canActivate: [AuthGuard] },
];
