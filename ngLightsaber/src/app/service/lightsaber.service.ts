import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';
import { Lightsaber } from '../models/lightsaber';

@Injectable({
  providedIn: 'root',
})
export class LightsaberService {
  private url = environment.baseUrl + 'api/lightsabers';

  constructor(private http: HttpClient) {}

  index(): Observable<Lightsaber[]> {
    return this.http.get<Lightsaber[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('Lightsaber.index(): error retrieving Lightsabers:' + err)
        );
      })
    );
  }

  show(id: number): Observable<Lightsaber> {
    return this.http.get<Lightsaber>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('Lightsaber.show(): error retrieving Lightsaber:' + err)
        );
      })
    );
  }

  create(ls: Lightsaber): Observable<Lightsaber> {
    // const httpOptions = {
    //   'Authorization': 'Basic c2hhdW46d29tYmF0MQ=='
    // };
    return this.http.post<Lightsaber>(this.url, ls).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('Lightsaber.create(): error retrieving Lightsaber:' + err)
        );
      })
    );
  }

  update(id: number, prod: Lightsaber): Observable<Lightsaber> {
    return this.http.put<Lightsaber>(this.url + '/' + id, prod).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('Lightsaber.update(): error retrieving Lightsaber:' + err)
        );
      })
    );
  }

  destroy(lsId: number): Observable<void> {
    return this.http.delete<void>(this.url +'/'+ lsId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('Lightsaber.destroy(): error retrieving Lightsaber:' + err)
        );
      })
    );
  }
}
