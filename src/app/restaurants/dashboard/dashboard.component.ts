import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { async } from 'rxjs/internal/scheduler/async';
import { AppState } from '../../appState';
import { RestaurantsService } from '../../service/restaurants.service';
import * as fromRestaurantActions from '../../actions/restaurants.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;

  constructor(
    private store: Store<AppState>,
    private restaurantsService: RestaurantsService,
  ) {
    this.store.dispatch(new fromRestaurantActions.LoadRestaurantsViaEffect());
   }

  ngOnInit() {
    this.restaurants$ = this.store.select(c => c.restaurant);
  }
}
