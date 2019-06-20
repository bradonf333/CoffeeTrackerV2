import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coffee-create',
  templateUrl: './coffee-create.component.html',
  styleUrls: ['./coffee-create.component.scss']
})
export class CoffeeCreateComponent implements OnInit {
  coffeeForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.coffeeForm = new FormGroup({
      // Form Controls
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      roaster: new FormControl('', [Validators.required]),
      rating: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ])
    });
  }

  get name() {
    return this.coffeeForm.get('name');
  }
  get roaster() {
    return this.coffeeForm.get('roaster');
  }
  get rating() {
    return this.coffeeForm.get('rating');
  }

  /** Add or Edit Coffee */
  onSubmit() {
    // this.coffeeForm.controls.coffeeName.setValue(name);
    console.log(this.coffeeForm.controls.coffeeName.value);
  }

  /** Get FormControl Error Messages */
  getErrorMessage(validator: FormControl) {
    console.log(validator);
    let errorMessage = '';
    if (validator.hasError('required')) {
      errorMessage += 'You must enter a value.';
    }
    if (validator.hasError('maxlength')) {
      errorMessage += 'You have exceeded the Max Length.';
    }
    if (validator.hasError('minlength') || validator.hasError('maxlength')) {
      errorMessage += 'You must enter a value between 2 and 50 characters long.';
    }
    if (validator.hasError('min') || validator.hasError('max')) {
      errorMessage += 'You must enter a number between 0 and 10';
    }
    return errorMessage;
  }
}
