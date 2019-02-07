import { Action } from '@ngrx/store';
import { Restaurant } from '../models/restaurant';

// *** Action Constants.
export const LOAD_RESTAURANTS = '[RESTAURANTS] - Load Restaurants';
export const LOAD_RESTAURANTS_EFFECT = '[RESTAURANTS] - Load Restaurants via Effect';
export const LOAD_RESTAURANTS_COMPLETE = '[RESTAURANTS] - Load Restaurants via Effect Complete';
export const ADD_RESTAURANT = '[RESTAURANTS] - Add Restaurant';

// *** Action Creators.
export class LoadRestaurantsViaEffect implements Action {
  public readonly type = LOAD_RESTAURANTS_EFFECT;
}

export class LoadRestaurantsViaEffectComplete implements Action {
  readonly type = LOAD_RESTAURANTS_COMPLETE;
  constructor(public payload: Restaurant[]) {}
}

export class AddRestaurant implements Action {
  readonly type = ADD_RESTAURANT;
  constructor(public payload?: Restaurant) {
  }
}

export type All =
  // LoadRestaurants |
  LoadRestaurantsViaEffect |
  LoadRestaurantsViaEffectComplete |
  AddRestaurant;
