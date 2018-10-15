import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../service/restaurants.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private store: Store<Restaurant>
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurants$ = this.restaurantsService.getRestaurants();
  }
}
