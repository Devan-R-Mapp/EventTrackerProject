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

  show(id: number | null): Observable<Lightsaber> {
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

  update(id: number | null, prod: Lightsaber): Observable<Lightsaber> {
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

  destroy(lsId: number | null): Observable<boolean> {
    return this.http.delete<boolean>(this.url +'/'+ lsId).pipe(
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
