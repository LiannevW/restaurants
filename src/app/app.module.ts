// angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

// Store Stuff
import { StoreModule } from '@ngrx/store';
import { restaurantReducer } from './store/reducers/restaurant.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Effects
import {EffectsModule} from '@ngrx/effects';
import { RestaurantsEffects } from './store/effects/restaurantsEffects';

// Custom Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-masden-app'),
    AngularFirestoreModule,
    StoreModule.forRoot({restaurant: restaurantReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10}),
      EffectsModule.forRoot([RestaurantsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
