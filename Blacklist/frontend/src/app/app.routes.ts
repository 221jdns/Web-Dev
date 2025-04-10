import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ProtectedComponent } from './protected/protected/protected.component';
import { RegisterComponent } from './register/register/register.component';
import { VacancylistComponent } from './vacancylist/vacancylist/vacancylist.component';
import { CompanyComponent } from './company/company/company.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'vacancy', component: VacancylistComponent },
    { path: 'protected', component: ProtectedComponent },
    { path: '', component: RegisterComponent },
  ];
