import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from '../Services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {
  // coffees: Observable<Coffee[]>;
  coffees$: Observable<Coffee[]>;
  headElements = ['Name', 'Roaster', 'Rating'];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffees$ = this.coffeeService.list();
  }
}
