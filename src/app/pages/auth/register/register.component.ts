import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  password_confirmation = '';
  role = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
      role: this.role
    };

    this.auth.register(data).subscribe({
      next: () => this.router.navigate(['/courses']),
      error: (err) => {
        console.error(err);
        alert('وقع خطأ أثناء التسجيل. تأكد من صحة البيانات.');
      }
    });
  }
}
