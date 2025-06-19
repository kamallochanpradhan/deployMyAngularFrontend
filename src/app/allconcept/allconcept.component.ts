import { Component, OnInit } from '@angular/core';
import { NumbersToWordsPipePipe } from '../employee/numbers-to-words-pipe.pipe';
import { CustomButtonComponentForHostBindingComponent } from '../employee/custom-button-component-for-host-binding/custom-button-component-for-host-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupEmployeeComponent } from '../employee/EmployeeComponents/signup-employee/signup-employee.component';
import { LifecyclehookComponent } from '../lifecyclehook/lifecyclehook.component';
import { NgClassImplementComponent } from '../ng-class-implement/ng-class-implement.component';
import { ParentchangedetectionComponent } from "../Components/parentchangedetection/parentchangedetection.component";


@Component({
  selector: 'app-allconcept',
  standalone: true,
  imports: [NumbersToWordsPipePipe, CustomButtonComponentForHostBindingComponent, CommonModule,
    FormsModule, ReactiveFormsModule, SignupEmployeeComponent, LifecyclehookComponent, NgClassImplementComponent, ParentchangedetectionComponent],
  templateUrl: './allconcept.component.html',
  styleUrls: ['./allconcept.component.css']
})
export class AllconceptComponent implements OnInit{

  myValue:number | undefined;
  myValue2 = 'Hello world';
  txtInput="";


  ngOnInit(): void {
    
    this.myValue=3001;
    this.myValue2 = 'Directieve used with Input';
  }

 

  
}
