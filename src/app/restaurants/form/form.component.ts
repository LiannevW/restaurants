import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  restaurantForm = new FormGroup ({
  });

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.restaurantForm = this.formBuilder.group({

    });
}

  onSubmit() {
    console.log('inOnSubmit');
    console.log(this.restaurantForm);
  }
}
