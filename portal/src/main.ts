import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Environment configuration loading
function loadEnv(): Promise<any> {
  if (typeof window === 'undefined') {
    // Server-side: return empty config or load from server
    return Promise.resolve({});
  }
  
  // Client-side: fetch env.json
  return fetch('env.json')
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error loading env.json:', error);
      return {};
    });
}

loadEnv().then((env) => {
  console.log(env);
  bootstrapApplication(App, appConfig(env)).catch((err) => console.error(err));
});
