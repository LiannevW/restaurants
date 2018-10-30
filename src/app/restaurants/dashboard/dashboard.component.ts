import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { async } from 'rxjs/internal/scheduler/async';
import { AppState } from '../../appState';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.restaurants$ = this.store.select(c => c.restaurant);
  }
}
