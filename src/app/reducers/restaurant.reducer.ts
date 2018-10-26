import * as fromRestaurantActions from '../actions/restaurants.actions';
import { Restaurant } from '../models/restaurant';

export const initialState: Restaurant[] = [];

export function restaurantReducer(state = initialState, action: fromRestaurantActions.All) {
  switch (action.type) {
    case fromRestaurantActions.LOAD_RESTAURANTS: {
      console.log('LOAD_RESTAURANTS dispatched');

      return [
          ...action.payload
      ];
    }

    case fromRestaurantActions.LOAD_RESTAURANT: {
      console.log('LOAD ONE RESTAURANT DISPATCHED');

      // TODO OPTION 1: This does not return filtered state!
      return state.filter(c => c === action.payload);
    }

    default: {
		  return state;
    }

	}
}
