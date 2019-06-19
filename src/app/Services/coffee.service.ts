import { Injectable } from '@angular/core';
import { Coffee } from '../Models/Coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  public coffees: Coffee[] = [
    { id: '1', name: 'El Vapor', roaster: 'Jack Mormon', rating: 7 },
    { id: '2', name: 'La Bicicletta', roaster: 'Doma Coffee Roasters', rating: 7.5 },
    { id: '3', name: 'Little Italy', roaster: 'Bird Rock', rating: 9 }
  ];
  constructor() {}

  addNewCoffee(name: string, roaster: string, rating: number) {
    this.coffees.push(new Coffee(name, roaster, rating));
  }
}
