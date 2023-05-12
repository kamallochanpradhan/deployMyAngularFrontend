import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShowStudentsComponent } from './Components/show-students/show-students.component';
import { RegisterService } from './Services/register.service';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { HeaderinterceptorService } from './Interceptors/headerinterceptor.service';
import { ErrorlogginginterceptorService } from './Interceptors/errorlogginginterceptor.service';
import { SignupEmployeeComponent } from './employee/EmployeeComponents/signup-employee/signup-employee.component';
import { EmployeeModule } from './employee/employee.module';
import { AllconceptComponent } from './allconcept/allconcept.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { NgClassImplementComponent } from './ng-class-implement/ng-class-implement.component';
import { ObservabletestComponent } from './observabletest/observabletest.component';
import { ObservablwwithmappipeoperatorComponent } from './observablwwithmappipeoperator/observablwwithmappipeoperator.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ShowStudentsComponent,
    LoginComponent,
    AllconceptComponent,
    LifecyclehookComponent,
    NgClassImplementComponent,
    ObservabletestComponent,
    ObservablwwithmappipeoperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeModule
  ],
  providers: [
   
    DatePipe,
    {
    provide: HTTP_INTERCEPTORS,
    useClass:HeaderinterceptorService,
    multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:ErrorlogginginterceptorService,
      multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
