import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, data).pipe(
      tap(response => {
        console.log('Received token:', response.access_token);
        localStorage.setItem('token', response.access_token);
      })
    );
  }

  register(data: { name: string; email: string; password: string; password_confirmation: string }) {
    return this.http.post<any>(`${this.apiUrl}/register`, data).pipe(
      tap(response => {
        localStorage.setItem('token', response.access_token);
      })
    );
  }

  getUser() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${this.apiUrl}/user`, { headers });
  }

  logout() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      tap(() => localStorage.removeItem('token'))
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
