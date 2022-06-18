import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';
import { Lightsaber } from '../models/lightsaber';

@Injectable({
  providedIn: 'root'
})
export class LightsaberService {

  private url = environment.baseUrl + 'api/lightsabers'

  constructor(
  private http: HttpClient
  ) { }

  index(): Observable<Lightsaber[]> {
    return this.http.get<Lightsaber[]>(this.url).pipe(
      catchError((err:any) => {
      console.log(err);
      return throwError(
        () => new Error('Lightsaber.index(): error retrieving Lightsabers:' + err)
      )

    })
    )
  }
}
