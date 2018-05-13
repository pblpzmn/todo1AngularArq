import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private httpClient: HttpClient ) { 

  }

  getResponse<T>( url: string, property: string): Observable<T[]> {
    console.log('Service getResponse');
/*  //working request!
    this.httpClient.get<T[]>(url).pipe(
      map((collection: T[]) => {
        return collection.map(data => data[property]);
      }),
    ).subscribe( console.log );
*/
    return this.httpClient.get<T[]>(url).pipe(
      map((collection: T[]) => {
        return collection.map(data => data[property]);
      }),
    );
  }
}
