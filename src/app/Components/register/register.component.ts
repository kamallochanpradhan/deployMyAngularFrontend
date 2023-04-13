import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/Model/Student';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
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
