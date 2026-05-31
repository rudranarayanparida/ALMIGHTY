import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  username = '';
  password = '';
  email = '';

  isRegister = false;
  loading = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  submit() {

    // 🚫 Validation
    if (!this.username || !this.password || (this.isRegister && !this.email)) {
      this.toastr.warning('Please fill all fields');
      return;
    }

    this.loading = true;

    // =========================
    // 🔐 REGISTER
    // =========================
    if (this.isRegister) {

      this.api.register({
        username: this.username.trim(),
        email: this.email.trim(),
        password: this.password
      })
      .pipe(finalize(() => {
        this.loading = false;
        this.cdr.detectChanges();   // ✅ FIX Angular error
      }))
      .subscribe({

        next: () => {
          this.toastr.success('Registered successfully! Please login');
          this.isRegister = false;
          this.password = '';
        },

        error: (err) => {
          console.error("REGISTER ERROR:", err);
          this.toastr.error(err?.error?.error || 'Registration failed');
        }
      });
    }

    // =========================
    // 🔐 LOGIN
    // =========================
    else {

      this.api.login({
        username: this.username.trim(),
        password: this.password
      })
      .pipe(finalize(() => {
        this.loading = false;
        this.cdr.detectChanges();   // ✅ FIX Angular error
      }))
      .subscribe({

        next: (res: any) => {
          console.log("LOGIN RESPONSE:", res);

          localStorage.setItem('token', res.access);

          this.toastr.success('Login successful');

          // 🔁 CHANGE THIS IF YOUR ROUTE IS DIFFERENT
          this.router.navigate(['/home']);
        },

        error: (err) => {
          console.error("LOGIN ERROR:", err);
          this.toastr.error('Wrong Username or Password');
        }
      });
    }
  }

  toggleMode() {
    this.isRegister = !this.isRegister;

    // 🔄 Clear fields when switching
    this.username = '';
    this.password = '';
    this.email = '';
  }
}