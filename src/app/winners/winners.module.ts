// angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { TopSevenComponent } from './top-seven/top-seven.component';

const winnerRoutes: Routes = [
  {path: '', component: TopSevenComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(winnerRoutes),
  ],
  declarations: [TopSevenComponent]
})
export class WinnersModule { }

console.log('WinnersModule loaded lazily...');
