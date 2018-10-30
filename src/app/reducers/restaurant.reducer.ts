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

    case fromRestaurantActions.ADD_RESTAURANT: {

      return [
        ...state, action.payload
      ];
    }

    default: {
		  return state;
    }

	}
}
