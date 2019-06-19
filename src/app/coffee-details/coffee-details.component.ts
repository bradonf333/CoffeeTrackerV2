import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {
  elements: any = [
    { id: 1, Name: 'El Vapor', Roaster: 'Jack Mormon', Rating: '7' },
    { id: 2, Name: 'La Bicicletta', Roaster: 'Doma Coffee Roasters', Rating: '7.5' },
    { id: 3, Name: 'Little Italy', Roaster: 'Bird Rock', Rating: '9' }
  ];

  headElements = ['ID', 'Name', 'Roaster', 'Rating'];

  constructor() {}

  ngOnInit() {}
}
