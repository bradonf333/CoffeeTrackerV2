import { Injectable } from '@angular/core';
import { Coffee } from '../Models/Coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  public coffeeList: Coffee[] = [
    { id: '1', name: 'El Vapor', roaster: 'Jack Mormon', rating: 7 },
    { id: '2', name: 'La Bicicletta', roaster: 'Doma Coffee Roasters', rating: 7.5 },
    { id: '3', name: 'Little Italy', roaster: 'Bird Rock', rating: 9 }
  ];
  constructor() {}

  addCoffee(coffee: Coffee) {
    this.coffeeList.push(coffee);
  }

  getAllCoffees() {
    return this.coffeeList;
  }

  getCoffee(id: string) {
    return this.coffeeList.find(x => x.id === id);
  }

  deleteCoffee(index: number) {
    this.coffeeList.splice(index, 1);
  }
}
