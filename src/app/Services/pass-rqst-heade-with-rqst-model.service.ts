import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PassRqstHeadeWithRqstModelService {
  private apiUrl = 'http://localhost:5176/api/';

  constructor(private http: HttpClient) { }

  processRequest(requestModel: any): Observable<any> {
    debugger;
    const authToken = '678898765666';
    const contentType = 'application/json';
    const headers = new HttpHeaders({
      'Authorization88': authToken,
      'ContentType': contentType
    });

    return this.http.post<any>(this.apiUrl + 'Student/process', requestModel, {headers})
    .pipe(
      map(response => {
        // Parse the response as JSON
        return JSON.parse(JSON.stringify(response));
        console.log("See Success Response:", response);
      }),
      catchError((error: HttpErrorResponse) => {
        // Use a factory function to create the error
        return throwError(() => new Error('Something went wrong with the HTTP request.'));
      })
    );
}
private handleError(error: HttpErrorResponse): Observable<never> {
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    console.error('An error occurred:', error.error.message);
  } else {
    // Server-side error
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${JSON.stringify(error.error)}`
    );
  }
  // Return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}
}