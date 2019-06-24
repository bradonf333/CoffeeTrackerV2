import { Component, OnInit } from '@angular/core';
import { Coffee } from '../Models/Coffee';
import { CoffeeService } from '../Services/coffee.service';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {
  // coffees: Observable<Coffee[]>;
  coffees: Coffee[];
  headElements = ['Name', 'Roaster', 'Rating'];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    // this.coffees = this.coffeeService.getAllCoffees();
    this.coffeeService.getAllCoffeesFS().subscribe(coffeeData => {
      // coffeeData is now an array of Coffees. You can access the Properties of
      // the coffee object just like you would access an object within an array.
      // i.e. coffeeData[0].id, coffeeData[0].name, etc..
      this.coffees = coffeeData;
    });
  }
}
