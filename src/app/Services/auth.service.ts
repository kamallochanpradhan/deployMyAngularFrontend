import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest, AuthResponse } from '../Model/AuthRequest';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  readonly apiUrl = 'http://localhost:5176/api/';
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';

  constructor(private httpClient: HttpClient) { }

   // Login method
   AuthLogin(authObj: AuthRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.apiUrl + 'Account/AuthToken', authObj)
      .pipe(
        tap((res: AuthResponse) => {
          this.setTokens(res.token, res.refreshToken);
          console.log("Token--",res.token);
          console.log("Refresh Token--",res.refreshToken);
        })
      );
  }

  // Save tokens
  setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    console.log("Settoken kamal token",accessToken);
    console.log("Settoken kamal refresh",refreshToken);
  }

  // Getters
  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
console.log("getaccesstokkama",this.ACCESS_TOKEN_KEY)
  }

  // clearTokens(): void {
  //   localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  //   localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  // }
}
