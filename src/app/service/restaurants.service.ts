import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap, map} from 'rxjs/operators';
import * as fromRestaurantActions from '../store/actions/restaurants.actions';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';


import {AppState} from '../appState';
import {Store} from '@ngrx/store';

const BASE_URL = 'http://localhost:3000/restaurants';
const HEADERS  = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient,
              private store: Store<AppState>,
              private afs: AngularFirestore) {
  }

  loadRestaurantsViaEffect() {
    const restaurantsCollection$ = this.afs.collection(environment.restaurants_endpoint);
    return restaurantsCollection$.snapshotChanges().pipe(
        map(restaurants => {
          return restaurants.map(restaurant => {
            return restaurant.payload.doc.data();
          });
        })
      );
  }

  addRestaurantViaEffect(restaurant: Restaurant) {
    const restaurantsCollection$ = this.afs.collection(environment.restaurants_endpoint);

    return restaurantsCollection$.add({restaurant});
    // return restaurantsCollection$.doc('adsfhj').set({restaurant});
  }

}
