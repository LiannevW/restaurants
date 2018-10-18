import { Action } from '@ngrx/store';
import { Restaurant } from '../models/restaurant';

// *** Action Constants.
export const LOAD_RESTAURANTS = '[RESTAURANTS] - Load Restaurants';

// *** Action Creators.
export class LoadRestaurants implements Action {
  readonly type = LOAD_RESTAURANTS;
  constructor(public payload?: Restaurant[]) {

  }
}

export type All =
  LoadRestaurants;
