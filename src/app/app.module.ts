import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

// Effects
// import {EffectsModule} from '@ngrx/effects';
// import { RestaurantsEffects } from './effects/restaurantsEffects';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-masden-app'),
    AngularFirestoreModule,
    // EffectsModule.forRoot([RestaurantsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
