import { ApplicationConfig, isDevMode, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { UseCaseScope } from './utils/use-case-scope';
import { withInterceptors, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouteReusableStrategy } from './@shared';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { apiPrefixInterceptor } from './@core/http/api-prefix.interceptor';
import { errorHandlerInterceptor } from './@core/http/error-handler.interceptor';
import { provideToastr } from 'ngx-toastr';
import { AppEnvStore } from './store/app-env.state';
import {
  AutoRefreshTokenService,
  createInterceptorCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  IncludeBearerTokenCondition,
  includeBearerTokenInterceptor,
  provideKeycloak,
  UserActivityService,
  withAutoRefreshToken,
} from 'keycloak-angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';

export const provideKeycloakAndInterceptor = (env: any) => {
  const urlConditions = [
    createInterceptorCondition<IncludeBearerTokenCondition>({
      // eslint-disable-next-line no-useless-escape
      urlPattern: new RegExp(`^${env.apiUrl}(\/.*)?$`, 'i'),
      bearerPrefix: 'Bearer',
    }),
    createInterceptorCondition<IncludeBearerTokenCondition>({
      // eslint-disable-next-line no-useless-escape
      urlPattern: new RegExp(`^${env.authDomain}(\/.*)?$`, 'i'),
      bearerPrefix: 'Bearer',
    }),
    // you can add more interceptors in this array...
  ];

  // in our case, we put the identity configuration in the environment files
  // const { identityServerUrl, clientId, realm } = environment.auth;

  return [
    provideKeycloak({
      config: {
        url: env.authDomain,
        realm: env.realm,
        clientId: env.clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true,
      },
      features: [
        withAutoRefreshToken({
          sessionTimeout: 300000,
          onInactivityTimeout: 'logout',
        }),
      ],
      providers: [AutoRefreshTokenService, UserActivityService],
    }),
    { provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, useValue: urlConditions },
  ];
};

export function initFactory() {
  const envStore = inject(AppEnvStore);

  return async () => { };
}

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY', // how the input string is parsed
  },
  display: {
    dateInput: 'DD/MM/YYYY', // how it appears in the input
    monthYearLabel: 'MMM YYYY', // month-year label in calendar
    dateA11yLabel: 'LL', // accessibility label
    monthYearA11yLabel: 'MMMM YYYY', // accessibility label for month/year
  },
};

export const appConfig = (env: any) => {
  return {
    providers: [
      UseCaseScope,
      provideRouter(routes, withHashLocation()),
      provideKeycloakAndInterceptor(env),
      provideAnimations(),
      provideHttpClient(
        withInterceptorsFromDi(),
        withInterceptors([apiPrefixInterceptor, errorHandlerInterceptor, includeBearerTokenInterceptor]),
      ),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
      provideToastr(),
      importProvidersFrom(
        StoreDevtoolsModule.instrument({}),
        TranslateModule.forRoot(),
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
      ),
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
      { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
      { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
      {
        provide: RouteReuseStrategy,
        useClass: RouteReusableStrategy,
      },
      provideAppInitializer(() => initFactory()()),
    ],
  } as ApplicationConfig;
};
