import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Model/Student';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly apiUrl = 'http://localhost:5176/api/';

  constructor(private httpClient: HttpClient) {
    // http://localhost:5176/api/Student/GetStudent       --Get
    // http://localhost:5176/api/Student/InsertStudent    --Post
    //http://localhost:5176/api/Student/UpdateStudent    --put
    //http://localhost:5176/api/Student/DeleteStudent?Id=2    --Delete
  }

  getStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiUrl + 'Student/GetStudent');
  }

  InsertStudent(stdObj: any): Observable<Student[]> {
    return this.httpClient.post<Student[]>(
      this.apiUrl + 'Student/InsertStudent',
      stdObj
    );
  }

  deleteStudent(stid: number): Observable<number> {
    return this.httpClient.delete<number>(
      this.apiUrl + 'Student/DeleteStudent?Id=' + stid
    );
  }

  updateStudent77(stdObj: Observable<Student>) {
    debugger;
    return this.httpClient.put<Student>(
      this.apiUrl + 'Student/UpdateStudent',
      stdObj
    );
  }

  GetStudentByID(stid:number):Observable<Student>
  {
return this.httpClient.get<Student>(this.apiUrl + 'Student/GetStudentByID/' +stid);
  }
}
