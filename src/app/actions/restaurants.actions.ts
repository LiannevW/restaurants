import { Action } from '@ngrx/store';
import { Restaurant } from '../models/restaurant';

// *** Action Constants.
export const LOAD_RESTAURANTS = '[RESTAURANTS] - Load Restaurants';
export const LOAD_RESTAURANT = '[RESTAURANTS] - Load One Restaurant';

// *** Action Creators.
export class LoadRestaurants implements Action {
  readonly type = LOAD_RESTAURANTS;
  constructor(public payload?: Restaurant[]) {

  }
}

export class LoadRestaurant implements Action {
  readonly type = LOAD_RESTAURANT;
  constructor(public payload?: Restaurant) {
  }
}

export type All =
  LoadRestaurants |
  LoadRestaurant;
