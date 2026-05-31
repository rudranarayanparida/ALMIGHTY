import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {

  const router = inject(Router);

  const token = localStorage.getItem('token');

  console.log("🔐 GUARD TOKEN:", token);

  if (token && token !== 'undefined' && token !== 'null') {
    return true;
  }

  // ❌ redirect if no token
  return router.parseUrl('/login');
};