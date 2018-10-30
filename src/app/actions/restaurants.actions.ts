import { Action } from '@ngrx/store';
import { Restaurant } from '../models/restaurant';

// *** Action Constants.
export const LOAD_RESTAURANTS = '[RESTAURANTS] - Load Restaurants';
export const ADD_RESTAURANT = '[RESTAURANTS] - Add Restaurant';

// *** Action Creators.
export class LoadRestaurants implements Action {
  readonly type = LOAD_RESTAURANTS;
  constructor(public payload?: Restaurant[]) {

  }
}

export class AddRestaurant implements Action {
  readonly type = ADD_RESTAURANT;
  constructor(public payload?: Restaurant) {
  }
}

export type All =
  LoadRestaurants |
  AddRestaurant;
