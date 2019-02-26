
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as restaurantActions from '../actions/restaurants.actions';
import { RestaurantsService } from '../../service/restaurants.service';
import {map, switchMap, catchError, tap, mergeMap} from 'rxjs/operators';
import {Restaurant} from '../../models/restaurant';

@Injectable()
export class RestaurantsEffects {

  constructor(
    private actions$: Actions,
    private restaurantsService: RestaurantsService) {}

  @Effect()
  loadRestaurants$ = this.actions$.pipe(
    ofType(restaurantActions.LOAD_RESTAURANTS_EFFECT),
    switchMap(() =>
      this.restaurantsService.loadRestaurantsViaEffect()
        .pipe(
          map((restaurants: Restaurant[]) => new restaurantActions.LoadRestaurantsViaEffectComplete(restaurants)),
          catchError(err => {
            console.log(err);
            throw err;
          })
        )
    )
  );

  @Effect()
  addRestaurant$ = this.actions$.pipe(
    ofType(restaurantActions.ADD_RESTAURANT_EFFECT),
    mergeMap((action: restaurantActions.AddRestaurantsViaEffect) =>
      this.restaurantsService.addRestaurantViaEffect(action.payload)
      ),
      map(res => new restaurantActions.AddRestaurantsViaEffectComplete),
      catchError(err => {
        console.log(err);
        throw err;
      })
    );
}
