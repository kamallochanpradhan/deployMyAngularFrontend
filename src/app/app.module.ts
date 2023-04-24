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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ShowStudentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
   
    DatePipe,
    {
    provide: HTTP_INTERCEPTORS,
    useClass:HeaderinterceptorService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
