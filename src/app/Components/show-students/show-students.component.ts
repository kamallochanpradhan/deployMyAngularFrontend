import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Student } from 'src/app/Model/Student';
import { RegisterService } from 'src/app/Services/register.service';
import { CommonModule, DatePipe } from '@angular/common';
import { deleteStudent, loadStudents, updateStudent } from 'src/app/store/student/student.actions';
import { AppState } from 'src/app/store/student/student.reducer';
import { selectAllStudents, selectStudentsError, selectStudentsLoading } from 'src/app/store/student/student.selectors';

@Component({
   standalone: true,
  selector: 'app-show-students',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  //FormBuilder, FormGroup, FormControl,
  //providers: [DatePipe],
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css'],
})
export class ShowStudentsComponent implements OnInit, OnDestroy {
  massage: string = '';
  studentList: Student[] = [];
  captureGenderselectedvalue:string | undefined;
  students$ = this.store.select(selectAllStudents);
  loading$ = this.store.select(selectStudentsLoading);
  error$ = this.store.select(selectStudentsError);
  private destroy$ = new Subject<void>();

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


  constructor(
    private _apiservice: RegisterService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>
  ) {
  }

  trackByStudentId(index: number, student: Student): number {
    return student.id ?? index;
  }

  ngOnInit(): void {
    this.students$.pipe(takeUntil(this.destroy$)).subscribe((students) => {
      this.studentList = students;
      this.cdr.markForCheck();
    });

    this.getMyAllStudents();
    this.captureGenderselectedvalue='';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getMyAllStudents() {
    this.store.dispatch(loadStudents());
  }

  deleteStudent(stid: number) {
    if (confirm('Are you sure to Delete')) {
      this.store.dispatch(deleteStudent({ id: stid }));
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

    this.store.dispatch(updateStudent({ student: this.updatedStudent }));
    this.massage = 'Record updated Successfully';
    this.displayForm.reset();  
    this.cdr.markForCheck();
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
   
    this.store.dispatch(updateStudent({ student: user }));
    this.massage = 'Record updated Successfully';
    user.isEdit=false;
    this.displayForm.reset();  
    this.cdr.markForCheck();
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
