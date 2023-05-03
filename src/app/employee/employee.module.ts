import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupEmployeeComponent } from './EmployeeComponents/signup-employee/signup-employee.component';
import { NumbersToWordsPipePipe } from './numbers-to-words-pipe.pipe';
@NgModule({
  declarations: [
    SignupEmployeeComponent,
    NumbersToWordsPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[SignupEmployeeComponent,NumbersToWordsPipePipe]
})
export class EmployeeModule
 { 

 }
