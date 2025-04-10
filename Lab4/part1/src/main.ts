import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(routeConfig) 
  ]
}).catch(err => console.error(err));
