import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupEmployeeComponent } from './EmployeeComponents/signup-employee/signup-employee.component';
import { NumbersToWordsPipePipe } from './numbers-to-words-pipe.pipe';
import { MyCustomdirectiveDirective } from './my-customdirective.directive';
import { DirectieveforhostlistnerDirective } from './directieveforhostlistner.directive';
import { CustomButtonComponentForHostBindingComponent } from './custom-button-component-for-host-binding/custom-button-component-for-host-binding.component';
@NgModule({
  declarations: [
    SignupEmployeeComponent,
    NumbersToWordsPipePipe,
    MyCustomdirectiveDirective,
    DirectieveforhostlistnerDirective,
    CustomButtonComponentForHostBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SignupEmployeeComponent,
    NumbersToWordsPipePipe,
    MyCustomdirectiveDirective,
    DirectieveforhostlistnerDirective,
    CustomButtonComponentForHostBindingComponent
  ]
})
export class EmployeeModule
 { 

 }
