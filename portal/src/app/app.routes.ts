import { Routes } from '@angular/router';
import { authGuard } from './@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    data: { title: 'Home' },
    loadComponent: () => import('./views/home/home').then((m) => m.Home),
  },
  {
    path: 'privacy-policy',
    data: { title: 'Privacy Policy' },
    loadComponent: () =>
      import('./views/privacy-policy/privacy-policy').then(
        (m) => m.PrivacyPolicy
      ),
  },
  {
    path: 'terms-of-service',
    data: { title: 'Terms of Service' },
    loadComponent: () =>
      import('./views/terms-of-service/terms-of-service').then(
        (m) => m.TermsOfService
      ),
  },
  {
    path: 'register',
    data: { title: 'Register' },
    loadComponent: () =>
      import('./views/register/register').then((m) => m.Register),
  },
  {
    path: 'register/:requestId',
    data: { title: 'Register' },
    loadComponent: () =>
      import('./views/register/register').then((m) => m.Register),
  }
];
