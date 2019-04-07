import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { GirlGroup } from '../models/GirlGroup';


@Injectable({
  providedIn: 'root'
})
export class IdolsApiService {
  private idolsUrl: string = 'https://gyp2019.github.io/the-idols-json/api';

  constructor(private http: HttpClient) { }

  getGirlGroup(group: string): Observable<GirlGroup> {
    const url = `${this.idolsUrl}/${group}.json`;
    return this.http.get<GirlGroup>(url)
      .pipe(
        tap(_ => console.log(`fetched GirlGroup: ${group}`)),
        catchError(this.handleError<GirlGroup>('getIdols', null))
      );
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
