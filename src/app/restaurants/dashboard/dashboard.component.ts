import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../appState';
import * as fromRestaurantActions from '../../store/actions/restaurants.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.dispatch(new fromRestaurantActions.LoadRestaurantsViaEffect());
   }

  ngOnInit() {
    this.restaurants$ = this.store.select(c => c.restaurant);
  }
}
