import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../appState';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../service/restaurants.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  idInUrl: number;
  restaurant$: Observable<Restaurant[]>;
  restaurant: any;
  selectedRestaurant: any;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.restaurant$ = this.store.select('restaurant');
  }

  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      this.idInUrl = Number(params.id);
    });

    this.restaurant$.subscribe(restaurant => {
      restaurant.forEach(restaurant => {
        if (restaurant.id === this.idInUrl) {
          this.selectedRestaurant = restaurant;
        }
      });
    });

  }

}



// this.restaurant$.subscribe(restaurant => {
//   this.restaurant = restaurant;
// });

// this.restaurant.forEach(restaurant => {
//   if (restaurant.id === 1) {
//     this.selectedRestaurant = restaurant;
//   }
// });

// this.route.params.subscribe((params: { id: string }) => {
//   this.id = Number(params.id);
// });
