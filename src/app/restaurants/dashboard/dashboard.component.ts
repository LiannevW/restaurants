import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../service/restaurants.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { async } from 'rxjs/internal/scheduler/async';
import { AppState } from '../../appState';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   // TODO: old version of getRestaurants without redux
  // restaurants$: Observable<Restaurant[]>;
  restaurants$: Observable<Restaurant[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.restaurants$ = this.store.select(c => c.restaurant);
  }

   // TODO: old version of getRestaurants without redux
  // getRestaurants() {
  //   this.restaurants$ = this.restaurantsService.getRestaurants();
  // }

  // getRestaurants() {
  //   console.log("in getRestaurants");
  //   this.restaurantsService.loadRestaurants();
  // }
}
