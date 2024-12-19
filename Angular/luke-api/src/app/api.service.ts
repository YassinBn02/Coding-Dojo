import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl="https://swapi.py4e.com/api"
  constructor(private http:HttpClient) {}


  getOne(id:number,category:string):Observable<any>{
    return this.http.get(this.baseUrl+"/"+category+"/"+id).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(()=>error.error.errors);
  }
  
}
