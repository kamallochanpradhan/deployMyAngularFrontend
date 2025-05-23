import { Routes } from '@angular/router';
import { ShowStudentsComponent } from './Components/show-students/show-students.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AllconceptComponent } from './allconcept/allconcept.component';

export const appRoutes: Routes = [
  { path: 'dashboard', component: ShowStudentsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allconcept', component: AllconceptComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./poduct/poduct.module').then((x) => x.PoductModule),
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
