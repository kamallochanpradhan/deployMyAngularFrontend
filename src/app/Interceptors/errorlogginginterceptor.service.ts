import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorlogginginterceptorService implements HttpInterceptor {

  constructor() 
  {

   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    debugger;
    //here we are not cloning the request means..we are not changing anything in the request
    return next.handle(req).pipe(tap(
      //tap function executed two arrow function 1st one executre in successful response
      //2nd one  executed in case of error response

      (event:HttpEvent<any>)=>
      {
        if(event instanceof HttpResponse)
        {
         // alert("success response here occured here");
          console.log("Check success response kamal",event);
          //do something in response
        }
      },
      (error:any)=>
      {
        if(error instanceof HttpErrorResponse)
        {
          //here you will get the error
          if(error.status==401)
          {
            console.log("Check error kamal",error);
            alert("Error occured here");
          }
        }
      }

    ));
  }
}
