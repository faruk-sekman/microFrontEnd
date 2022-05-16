import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {BannerModel} from './banner.model';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class BannerService {
  public readonly apiUrl: string = environment.apiBannersUrl;

  constructor(private http: HttpClient) {
  }

  getBanners(param:string): Observable<BannerModel[]> {
    return this.http.get<BannerModel[]>(this.apiUrl + param)
        .pipe(
            catchError(this.handleError<BannerModel[]>('getBanners', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}