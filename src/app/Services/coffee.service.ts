import { Injectable } from '@angular/core';
/* Firestore */
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { config } from '../app.config';
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
  constructor(private db: AngularFirestore) {
    const coffees = db.collection<Coffee>(config.collection_endpoint);
  }

  addCoffee(coffee: Coffee) {
    this.coffeeList.push(coffee);
  }

  getAllCoffees() {
    return this.coffeeList;
  }

  getAllCoffeesFS() {
    const coffees = this.db
      .collection<Coffee>(config.collection_endpoint)
      .snapshotChanges()
      .pipe(
        map(coffeeDocs =>
          coffeeDocs.map(a => {
            const data = a.payload.doc.data() as Coffee;
            const id = a.payload.doc.id;
            console.log(a.payload);
            console.log({ id, ...data });
            return { id, ...data };
          })
        )
      );

    console.log(coffees);

    return coffees;
  }

  getCoffee(id: string) {
    return this.coffeeList.find(x => x.id === id);
  }

  deleteCoffee(index: number) {
    this.coffeeList.splice(index, 1);
  }
}
