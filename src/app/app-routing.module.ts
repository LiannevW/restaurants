import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';

// Note: no import from the various components. Only references to
// the modules, containing the components
const routes: Routes = [
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  {path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsModule'},
  {path: 'top7', loadChildren: './winners/winners.module#WinnersModule'},
];

const config: ExtraOptions    = {
  useHash           : false,
  preloadingStrategy: PreloadAllModules,
  enableTracing     : false // turn on for console.logging of routing events
  // preloadingStrategy: PreloadAllModules // uncomment to load all modules lazily
};
export const AppRoutingModule = RouterModule.forRoot(routes, config);
