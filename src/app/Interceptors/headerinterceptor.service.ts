import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderinterceptorService implements HttpInterceptor {

  constructor() { 
    debugger;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req=req.clone({
      setHeaders:{
        'Content-Type':'application/json'
      }
    });
   //return next.handle(req);
   
   /*retry operator is a rxjs operator and if the api calling is failing 1st time 
   it will try another 4 time to call is */
   return next.handle(req).pipe(
    retry(4)
   );
  }
}
