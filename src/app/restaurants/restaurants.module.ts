// angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Services
import { RestaurantsService } from '../service/restaurants.service';

// Custom Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { TimerComponent } from './timer/timer.component';

// Routes
const restaurantsRoutes: Routes = [
  {path: '', component: TimerComponent},
  {path: 'restaurants', component: DashboardComponent},
  {path: 'detail/:id/:name', component: DetailsComponent},
  {path: 'voeg-restaurant-toe', component: FormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(restaurantsRoutes),
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent, DetailsComponent, FormComponent, TimerComponent],
  providers   : [RestaurantsService]
})
export class RestaurantsModule { }
console.log('RestaurantsModule loaded lazily...');
