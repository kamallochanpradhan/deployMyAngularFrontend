import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    let authReq = req;

    if (accessToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token may be expired – try to refresh
          return this.authService.refreshToken().pipe(
            switchMap((res) => {
              this.authService.setTokens(res.token, res.refreshToken);
console.log("Refresh token called in Httpintercept",res.token);
              const newReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.token}`
                }
              });

              return next.handle(newReq);
            }),
            catchError(err => {
              // Refresh failed – logout or handle it
              this.authService.clearTokens();
              return throwError(() => err);
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
}
