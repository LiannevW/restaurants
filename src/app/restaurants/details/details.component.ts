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
  styleUrls: ['./details.component.scss']
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
    console.log('in details', this.restaurant$);
  }

  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      this.idInUrl = Number(params.id);
      console.log('this is id in url');
    });

    // this.restaurant$.subscribe(restaurant => {
    //   restaurant.forEach(restaurant => {
    //     if (restaurant.id === this.idInUrl) {
    //       this.selectedRestaurant = restaurant;
    //     }
    //   });
    // });

  }

}
