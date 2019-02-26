import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../service/restaurants.service';
import * as fromRestaurantActions from '../../actions/restaurants.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../appState';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  restaurantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restaurantsService: RestaurantsService,
    private store: Store<AppState>) {

    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.restaurantForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'cutlery': new FormControl('', Validators.required),
      'site': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required)
    });
  }

  onSubmitRestaurantForm() {
    this.store.dispatch(new fromRestaurantActions.AddRestaurantsViaEffect(this.restaurantForm.value));
    this.showConfirmation();
  }

  private showConfirmation() {
    const confirmationEl = document.querySelector('.restaurant-form__confirmation');
    confirmationEl.classList.remove('is-hidden');
    confirmationEl.classList.add('is-visible');
  }
}
