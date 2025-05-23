import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { Student } from 'src/app/Model/Student';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  massage: string = '';
  //signUpForm: FormGroup = new FormGroup({});
  signUpForm: any;

  constructor(private _apiservice: RegisterService) {} 

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      StudentName: new FormControl(null),
      Password: new FormControl(null),
      Email: new FormControl(null),
      DateOfBirth: new FormControl(null),
      Pin: new FormControl(null),
      Address: new FormControl(null),
      Gender: new FormControl(null),
    });

    this.signUpForm.valueChanges.subscribe((value: any)=>{
      console.log("Value Changes Observable will give you all the forms Details",value);
    })
  }
  RegisterStudent(student: Student) {
    this._apiservice.InsertStudent(student).subscribe(() => {
      this.massage = 'Record saved Successfully';
    });
  }
  onFormSubmit() {
    const student = this.signUpForm.value;
    this.RegisterStudent(student);
    console.log(student);
  }
}
