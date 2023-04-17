import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowStudentsComponent } from './Components/show-students/show-students.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [

  {path:"dashboard",component:ShowStudentsComponent},
  {path:"",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
