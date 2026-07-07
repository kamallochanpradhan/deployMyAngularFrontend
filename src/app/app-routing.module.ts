import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Components/show-students/show-students.component').then(
        (m) => m.ShowStudentsComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'allconcept',
    loadComponent: () =>
      import('./allconcept/allconcept.component').then(
        (m) => m.AllconceptComponent
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./poduct/poduct.module').then((x) => x.PoductModule),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Components/login/login.component').then((m) => m.LoginComponent),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
