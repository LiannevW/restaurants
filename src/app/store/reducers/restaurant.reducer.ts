import * as fromRestaurantActions from '../actions/restaurants.actions';
import { Restaurant } from '../../models/restaurant';

export const initialState: Restaurant[] = [];

export function restaurantReducer(state = initialState, action: fromRestaurantActions.All) {
  switch (action.type) {

    // case fromRestaurantActions.LOAD_RESTAURANTS_EFFECT: {
    //   return [
    //     ...state
    //   ];
    // }

    case fromRestaurantActions.LOAD_RESTAURANTS_COMPLETE: {
      return [...action.payload];
    }

    // case fromRestaurantActions.ADD_RESTAURANT_EFFECT: {
    //   console.log('nu ben ik in de case?! van reducer, heb ik hier ook die action.payload?', action.payload);

    //   return [
    //     ...state, action.payload
    //   ];

    // }

    case fromRestaurantActions.ADD_RESTAURANT_EFFECT_COMPLETE: {
      console.log('in reducer in add restaurant effects complete');
      return [...state];
    }

    default: {
      return state;
    }

  }

}
