import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthInterceptor } from './interceptor/interceptor.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([AuthInterceptor]))]
};
