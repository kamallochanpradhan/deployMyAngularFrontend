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
  massage: string = '';
  studentList: Student[] = [];
  captureGenderselectedvalue:string | undefined;

  // Create a new instance of Student
//updatedStudent:Student | undefined;
updatedStudent: Student | undefined;
 

  displayForm = new FormGroup({
    studentName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    pin: new FormControl(''),
    gender: new FormControl('')
  });

  stdName: string | undefined;
  selectedGender!: string;


  constructor(private _apiservice: RegisterService, private fb: FormBuilder,private datePipe: DatePipe) 
  {
   
  }

  ngOnInit(): void {
    this.getMyAllStudents();
    this.captureGenderselectedvalue='';
  }

  getMyAllStudents() {
    this._apiservice.getStudent().subscribe((data: Student[]) => {
      this.studentList = data;
      //console.log(this.studentList);
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

  update()
  {
    debugger;
    const Id = this.displayForm?.get('Id')?.value??''
    const id2=parseInt(Id);
    const studentName = this.displayForm?.get('studentName')?.value??''
    const address=this.displayForm?.get('address');
    const email=this.displayForm?.get('email');
    const gender=this.displayForm?.get('gender');
    const dateOfBirth=(this.displayForm?.get('dateOfBirth'));
    const dateObj = new Date(); 
    const pin=this.displayForm?.get('pin'); 
    const datetimeStr: string | null = "1989-04-04";
    const datetimeValue: Date = new Date(datetimeStr);

    this.updatedStudent = {
      id: 1,
      password:123,
      studentName: "uuuuuu",
      address: this.displayForm?.get('address')?.value??'',
      email: this.displayForm?.get('email')?.value??'',
      gender: this.displayForm?.get('gender')?.value??'',
      dateOfBirth: datetimeValue,
      "pin": 827,
      isEdit:false   
    };
 
    this.captureGenderselectedvalue=this.displayForm?.get('gender')?.value??'',

    this._apiservice.updateStudent(this.updatedStudent).subscribe((data)=>{
      console.log("1ST TIME",data);
      this.massage = 'Record updated Successfully';
      //user.isEdit=false;
      this.displayForm.reset();  

    });
  }

  updateStudent(user:any)
  {
    debugger;
    user.studentName=this.displayForm?.get('studentName');
    user.address=this.displayForm?.get('address');
    user.email=this.displayForm?.get('email');
    user.gender=this.displayForm?.get('gender');
    user.dateOfBirth=this.displayForm?.get('dateOfBirth');
    user.pin=this.displayForm?.get('pin');
   
    this._apiservice.updateStudent(user).subscribe((data)=>{
      console.log("1ST TIME",data);
      this.massage = 'Record updated Successfully';
      user.isEdit=false;
      this.displayForm.reset();  

    });
  }

  onEdit(user: any) {
    debugger;
    this.studentList.forEach((element) => {
      element.isEdit = false;
    });
 
    this.selectedGender=user.gender;
   // console.log(user);
    user.isEdit = true;
    this.displayForm?.get('studentName')?.setValue(user.studentName);
    this.displayForm?.get('address')?.setValue(user.address);
    this.displayForm?.get('email')?.setValue(user.email);

   //// this.displayForm?.get('gender')?.setValue(this.selectedGender);
    this.displayForm?.get('gender')?.setValue(user.gender);

    // Get the date from backend in "1989-04-04T00:00:00" format
    const backendDate = user.dateOfBirth;
    // Format the date using DatePipe
    const formattedDate = this.datePipe.transform(backendDate, 'yyyy-MM-dd');
    this.displayForm?.get('dateOfBirth')?.setValue(formattedDate);

    //this.displayForm?.get('dateOfBirth')?.setValue('2022-03-28');
    
    this.displayForm?.get('pin')?.setValue(user.pin);
  }
}
