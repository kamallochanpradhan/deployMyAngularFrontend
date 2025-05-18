import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest, AuthResponse } from '../Model/AuthRequest';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  readonly apiUrl = 'http://localhost:5176/api/';
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  // ⏱️ Timer to track auto logout
  private logoutTimer: any;
  constructor(private httpClient: HttpClient, private router: Router) { }
  

   // Login method
  AuthLogin(authObj: AuthRequest): Observable<AuthResponse> {
  return this.httpClient.post<AuthResponse>(this.apiUrl + 'Account/AuthToken', authObj)
    .pipe(
      tap((res: AuthResponse) => {
        this.setTokens(res.token, res.refreshToken);
        console.log("Token--", res.token);
        console.log("Refresh Token--", res.refreshToken);

        // ⏱ Set auto logout timer for 1 minute (adjust based on actual expiry)
        this.startAutoLogoutTimer(60 * 1000);
      })
    );
}

/** when normal token expire alos our page wont logout...siliently it will send http request 
 * to refresh token and get new token and set it in local storage. As a paramwter we
 *  we pass ExpiredToken andRefreshToken.
*/
refreshToken(): Observable<AuthResponse> {
  const refreshToken = this.getRefreshToken();
  const expiredToken = this.getAccessToken();
  
  return this.httpClient.post<AuthResponse>(this.apiUrl + 'Account/RefreshToken', {
    refreshToken,
    expiredToken
  }).pipe(
    tap((res: AuthResponse) => {
      this.setTokens(res.token, res.refreshToken);
      /**for now here set auto logout after 1 min bcoz have set backend refresh token
       * expire in 1 min. so if will increase refrsh token expiry time then here
       *  also i will do increase the autologout timer time 
       */
      this.startAutoLogoutTimer(60 * 1000); // again, set duration as per token expiry
    })
  );
}



getRefreshToken(): string | null {
  console.log("getRefreshToken method call in authservice kamal",this.REFRESH_TOKEN_KEY);
  return localStorage.getItem(this.REFRESH_TOKEN_KEY);
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

  clearTokens(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
  // Logout method
  logout(): void {
  this.clearTokens();
  if (this.logoutTimer) {
    clearTimeout(this.logoutTimer);
  }
  this.router.navigate(['/login']);
}

/**this.startAutoLogoutTimer(...) immediately after a user logs in successfully 
 * or after a refresh token call succeeds..so it will start counting time from that
 *  time when login
 * refresh token generated */
startAutoLogoutTimer(expiryInMs: number): void {
  if (this.logoutTimer) {
    clearTimeout(this.logoutTimer);
  }

  this.logoutTimer = setTimeout(() => {
    console.warn('⏰ Session expired. Auto-logging out...');
    this.logout();
  }, expiryInMs);
}


}
/**When the refresh token expires and the user is idle, no HTTP request happens,
 *  so no 401 error is triggered, and the interceptor doesn't run. so automatically 
 * redirect to login page wont come so implemented all this.
 * Angular can’t know tokens expired unless a request fails. */
