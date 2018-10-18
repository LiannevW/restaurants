import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {catchError, finalize, map} from 'rxjs/operators';
import {of} from 'rxjs';
import * as fromRestaurantActions from '../actions/restaurants.actions';

import {AppState} from '../appState';
import {Store} from '@ngrx/store';

const BASE_URL = 'http://localhost:3000/restaurants';
const HEADERS  = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient,
              private store: Store<AppState>) {
    this.loadRestaurants();
  }

  // TODO: old version of getRestaurants without redux
  // getRestaurants(): Observable<Restaurant[]> {
  //     return this.http.get<Restaurant[]>(BASE_URL)
  //     .pipe(
  //       catchError(err => {
  //         console.log('FOUT', err);
  //         return of(null);
  //       })
  //     );
  // }

  loadRestaurants() {
    return this.http.get(BASE_URL, HEADERS).pipe(
          tap(res => console.log('just received', res)),
      )
          .subscribe((restaurants: Restaurant[]) => this.store.dispatch(new fromRestaurantActions.LoadRestaurants(restaurants)),
          err => console.log('Error: did you forget to start json-server on localhost: 3000? (use "npm run json-server")'),
          () => console.log('Getting restaurants complete'));
  }

}
