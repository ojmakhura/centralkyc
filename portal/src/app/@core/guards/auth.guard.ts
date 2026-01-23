import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Keycloak from 'keycloak-js';

export const authGuard: CanActivateFn = async () => {
  const keycloak = inject(Keycloak);
  const router = inject(Router);

  if (!keycloak.authenticated) {
    try {
      await keycloak.login({
        redirectUri: window.location.origin + window.location.pathname,
      });
      return false;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  }

  return true;
};
