import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {ProductsModel} from './products.model';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductsService {
  public readonly apiUrl: string = environment.apiProductsUrl;

  constructor(private http: HttpClient) {
  }

  getProducts(limit:number): Observable<ProductsModel[]> {
    return this.http.get<ProductsModel[]>(this.apiUrl + '?limit=' + limit)
        .pipe(
            catchError(this.handleError<ProductsModel[]>('getProducts', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}