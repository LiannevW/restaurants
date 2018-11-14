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
  }

  loadRestaurants() {
    console.log('in loadrestaurants');
    return this.http.get(BASE_URL, HEADERS).pipe(
          tap(res => console.log('just received', res)),
      )
          .subscribe((restaurants: Restaurant[]) => this.store.dispatch(new fromRestaurantActions.LoadRestaurants(restaurants)),
          err => console.log('Error: did you forget to start json-server on localhost: 3000? (use "npm run json-server")'),
          () => console.log('Getting restaurants complete'));
  }

  addRestaurant(restaurant: Restaurant) {
    console.log(' in add restaurant, wat is mijn restaurant?', restaurant);
    return this.http.post(BASE_URL, restaurant, HEADERS).pipe(
      tap(res => console.log('just received response after post of one restaurant', res)),
  )
      .subscribe((restaurant: Restaurant) => this.store.dispatch(new fromRestaurantActions.AddRestaurant(restaurant)),
      err => console.log('Error: did you forget to start json-server on localhost: 3000? (use "npm run json-server")'),
      () => console.log('Getting restaurants complete after posting one restaurant'));
  }

}
