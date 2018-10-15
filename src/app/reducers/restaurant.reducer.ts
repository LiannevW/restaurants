import * as fromRestaurantActions from '../actions/restaurants.actions';
import { Restaurant } from '../models/restaurant';

export const initialState: Restaurant[] = [];

export function restaurantReducer(state = initialState, action: fromRestaurantActions.All) {
  switch (action.type) {
    case fromRestaurantActions.LOAD_RESTAURANTS: {

      return [
        console.log('LOAD_RESTAURANTS dispatched'),
        ...action.payload
      ];
    }

    default: {
		  return state;
    }

	}
}
