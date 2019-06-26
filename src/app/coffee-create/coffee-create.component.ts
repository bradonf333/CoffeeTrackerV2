import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from '../Services/coffee.service';

@Component({
  selector: 'app-coffee-create',
  templateUrl: './coffee-create.component.html',
  styleUrls: ['./coffee-create.component.scss']
})
export class CoffeeCreateComponent implements OnInit {
  @ViewChild('success', { static: false }) success: ModalDirective;
  coffeeForm: FormGroup;

  constructor(private coffeeService: CoffeeService, private router: Router) {}

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

  showAndHideModal() {
    this.success.show();

    // setTimeout(() => {
    //   this.success.hide();
    // }, 3000);
  }

  onSubmit() {
    const coffee: Coffee = {
      name: this.name.value,
      roaster: this.roaster.value,
      rating: this.rating.value
    };
    this.coffeeService.createCoffee(coffee).then(res => {
      console.log('Success after coffee creation.');
      this.showAndHideModal();
      // this.router.navigate(['/coffee-details']);
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

  /** Get FormControl Error Messages */
  getErrorMessage(validator: FormControl) {
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
