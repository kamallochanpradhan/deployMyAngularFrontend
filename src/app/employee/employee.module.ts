import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupEmployeeComponent } from './EmployeeComponents/signup-employee/signup-employee.component';
import { NumbersToWordsPipePipe } from './numbers-to-words-pipe.pipe';
import { MyCustomdirectiveDirective } from './my-customdirective.directive';
@NgModule({
  declarations: [
    SignupEmployeeComponent,
    NumbersToWordsPipePipe,
    MyCustomdirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[SignupEmployeeComponent,NumbersToWordsPipePipe,MyCustomdirectiveDirective]
})
export class EmployeeModule
 { 

 }
