import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IAvocat } from "./Avocat";
@Injectable(
  {
    providedIn: 'root'
  }
)

export class ListeAvocatService{
  private readonly HOTELS_ApI_URL = 'http://localhost:3000/avocat';
  constructor(private http : HttpClient){}
  public getAvocats() : Observable<IAvocat[]>
  {
    return this.http.get<IAvocat[]>(this.HOTELS_ApI_URL).pipe(
      tap(hotels=> console.log('Avocat: ', hotels)),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
