// angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// reducer
import { restaurantReducer } from '../reducers/restaurant.reducer';

// Store Stuff
import { StoreModule } from '@ngrx/store';

// Custom Components
import { DashboardComponent } from './dashboard/dashboard.component';

// Import services
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({restaurant: restaurantReducer}),
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class RestaurantsModule { }
