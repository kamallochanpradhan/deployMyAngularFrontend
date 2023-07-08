import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from '../Model/AuthRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  readonly apiUrl = 'http://localhost:5176/api/';

  constructor(private httpClient: HttpClient) { }

  AuthLogin(authObj: AuthRequest): Observable<any[]> 
  {
    debugger;
    return this.httpClient.post<AuthRequest[]>(this.apiUrl + 'Account/AuthToken',
    authObj);
  }
}
