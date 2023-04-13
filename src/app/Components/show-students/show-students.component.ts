import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Model/Student';
import { RegisterService } from 'src/app/Services/register.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css'],
})
export class ShowStudentsComponent {
  studentList: Student[] = [];

  displayForm = new FormGroup({
    studentName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    pin: new FormControl(''),
  });

  stdName: string | undefined;

  constructor(private _apiservice: RegisterService, private fb: FormBuilder,private datePipe: DatePipe) 
  {
   
  }

  ngOnInit(): void {
    this.getMyAllStudents();
  }

  getMyAllStudents() {
    this._apiservice.getStudent().subscribe((data: Student[]) => {
      this.studentList = data;
      console.log(this.studentList);
    });
  }

  deleteStudent(stid: number) {
    if (confirm('Are you sure to Delete')) {
      this._apiservice.deleteStudent(stid).subscribe((data) => {
        alert(data.toString());
        this.getMyAllStudents();
      });
    }
  }

  getStudentByID(stid: number) {
    this._apiservice.GetStudentByID(stid).subscribe((data) => {
      console.log(data);
    });
  }

  // updateStudent(stdObj:Student){
  //   this._apiservice.updateStudent(stdObj).subscribe((data)=>{

  //   })
  // }

  onEdit(user: any) {
    debugger;
    this.studentList.forEach((element) => {
      element.isEdit = false;
    });

    console.log(user);
    user.isEdit = true;
    this.displayForm?.get('studentName')?.setValue(user.studentName);
    this.displayForm?.get('address')?.setValue(user.address);
    this.displayForm?.get('email')?.setValue(user.email);

    // Get the date from backend in "1989-04-04T00:00:00" format
    const backendDate = user.dateOfBirth;
    // Format the date using DatePipe
    const formattedDate = this.datePipe.transform(backendDate, 'yyyy-MM-dd');
    this.displayForm?.get('dateOfBirth')?.setValue(formattedDate);

    //this.displayForm?.get('dateOfBirth')?.setValue('2022-03-28');
    
    this.displayForm?.get('pin')?.setValue(user.pin);
  }
}
