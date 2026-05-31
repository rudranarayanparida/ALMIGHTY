import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // 🔐 AUTH HEADER
  private getHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  // 🔐 LOGIN
  login(data: any) {
    return this.http.post(`${this.BASE_URL}/auth/login/`, data);
  }

  // 🔐 REGISTER
  register(data: any) {
    return this.http.post(`${this.BASE_URL}/auth/register/`, data);
  }

  // 📊 DASHBOARD (CRITICAL FIX)
  getDashboard() {
    return this.http.get(`${this.BASE_URL}/dashboard/`, this.getHeaders());
  }

  // 📤 UPLOAD
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.BASE_URL}/upload/`, formData, this.getHeaders());
  }
}