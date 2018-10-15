import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {catchError, finalize, map} from 'rxjs/operators';
import {of} from 'rxjs';

const BASE_URL = 'http://localhost:3000/restaurants';
const HEADERS  = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(
    private http: HttpClient
    ) { }

  getRestaurants(): Observable<Restaurant[]> {
      return this.http.get<Restaurant[]>(BASE_URL)
      .pipe(
        catchError(err => {
          console.log('FOUT', err);
          return of(null);
        })
      );
  }

}

