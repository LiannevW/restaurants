import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../service/restaurants.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  restaurantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restaurantsService: RestaurantsService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.restaurantForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'cutlery': new FormControl('', Validators.required),
      'site': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required)
    });
}

  onSubmitRestaurantForm() {
    this.restaurantsService.addRestaurant(this.restaurantForm.value);
  }
}
