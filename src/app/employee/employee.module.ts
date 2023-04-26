import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupEmployeeComponent } from './EmployeeComponents/signup-employee/signup-employee.component';
@NgModule({
  declarations: [
    SignupEmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SignupEmployeeComponent]
})
export class EmployeeModule
 { 

 }
