// angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Custom Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

// Services
import { RestaurantsService } from '../service/restaurants.service';

// Store Stuff
import { StoreModule } from '@ngrx/store';
import { restaurantReducer } from '../reducers/restaurant.reducer';
import { FormComponent } from './form/form.component';

// link is --> /restaurants
const restaurantsRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'detail/:id/:name', component: DetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({restaurant: restaurantReducer}),
    RouterModule.forChild(restaurantsRoutes),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10})
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent, DetailsComponent, FormComponent],
  providers   : [RestaurantsService]
})
export class RestaurantsModule { }
console.log('RestaurantsModule loaded lazily...');
