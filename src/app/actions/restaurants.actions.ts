import { Action } from '@ngrx/store';
import { Restaurant } from '../models/restaurant';

// *** Action Constants.
export const LOAD_RESTAURANTS_EFFECT = '[RESTAURANTS] - Load Restaurants via Effect';
export const LOAD_RESTAURANTS_COMPLETE = '[RESTAURANTS] - Load Restaurants via Effect Complete';
export const ADD_RESTAURANT_EFFECT = '[RESTAURANTS] - Add Restaurant';
export const ADD_RESTAURANT_EFFECT_COMPLETE = '[RESTAURANTS] - Add Restaurant via Effect complete';

// *** Action Creators.
export class LoadRestaurantsViaEffect implements Action {
  public readonly type = LOAD_RESTAURANTS_EFFECT;
}

export class LoadRestaurantsViaEffectComplete implements Action {
  readonly type = LOAD_RESTAURANTS_COMPLETE;
  constructor(public payload: Restaurant[]) {
  }
}

export class AddRestaurantsViaEffect implements Action {
  readonly type = ADD_RESTAURANT_EFFECT;
  constructor(public payload?: Restaurant) {
  console.log('in restaurant actions en dit is mijn payload', payload);
  }
}

export class AddRestaurantsViaEffectComplete implements Action {
  readonly type = ADD_RESTAURANT_EFFECT_COMPLETE;
  constructor() {
  console.log('add restaurant effect in action.ts is complete');
  }
}

export type All =
  LoadRestaurantsViaEffect |
  LoadRestaurantsViaEffectComplete |
  AddRestaurantsViaEffect |
  AddRestaurantsViaEffectComplete;
