import { Routes } from '@angular/router';

import { Login } from './Login/login';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Upload } from './upload/upload';
import { Home } from './home/home';
import { authGuard } from './auth.guard';

export const routes: Routes = [

  // ✅ DEFAULT → LOGIN
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ✅ LOGIN PAGE
  { path: 'login', component: Login },

  // ✅ MAIN APP (PROTECTED)
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: Home },
      { path: 'dashboard', component: Dashboard },
      { path: 'upload', component: Upload }
    ]
  },

  // ✅ FALLBACK
  { path: '**', redirectTo: 'login' }

];