import * as fromRestaurantActions from '../actions/restaurants.actions';
import { Restaurant } from '../models/restaurant';

export const initialState: Restaurant[] = [];

export function restaurantReducer(state = initialState, action: fromRestaurantActions.All) {
  switch (action.type) {

    case fromRestaurantActions.LOAD_RESTAURANTS_EFFECT: {
      return [
        ...state
      ];
    }

    case fromRestaurantActions.LOAD_RESTAURANTS_COMPLETE: {
      return [...action.payload];
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
