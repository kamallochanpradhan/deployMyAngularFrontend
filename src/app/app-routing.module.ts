import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowStudentsComponent } from './Components/show-students/show-students.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AllconceptComponent } from './allconcept/allconcept.component';

const routes: Routes = [
  { path: 'dashboard', component: ShowStudentsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allconcept', component: AllconceptComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./poduct/poduct.module').then((x) => x.PoductModule),
  },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
