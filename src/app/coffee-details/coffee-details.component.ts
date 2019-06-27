import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from '../Services/coffee.service';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {
  // coffees: Observable<Coffee[]>;
  coffees$: Observable<Coffee[]>;
  headElements = ['Name', 'Roaster', 'Rating'];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffees$ = this.coffeeService.list();
  }
}
