import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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

  public coffees: AngularFirestoreCollection<Coffee>;

  constructor(private afs: AngularFirestore) {
    this.coffees = afs.collection<Coffee>(config.collection_endpoint);
  }

  // constructor() {}

  addCoffee(coffee: Coffee) {
    this.coffeeList.push(coffee);
  }

  createCoffee(coffee: Coffee) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection<Coffee>(config.collection_endpoint)
        .add(coffee)
        .then(
          docRef => {
            console.log(`Document written with ID: ${docRef.id}`);
            resolve(docRef);
          },
          err => {
            console.error(`Error adding the document: ${err}`);
            reject(err);
          }
        );
    });
  }

  /**
   * Returns an Observable of Coffee[]. In order to get the Array of Coffees
   * you need to subscribe to the Observable.
   */
  getAllCoffeesFS() {
    const coffees = this.afs
      .collection<Coffee>(config.collection_endpoint)
      .snapshotChanges()
      .pipe(
        map(coffeeDocs =>
          coffeeDocs.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            // console.log(a.payload);
            // console.log({ id, ...data });
            return { id, ...data } as Coffee;
            // By returning this piped/mapped object as a coffee you can interact with it as a Coffee object.
          })
        )
      );
    return coffees;
  }

  /** Return a Coffee from the DB */
  getCoffee(id: string) {
    return this.afs
      .collection(config.collection_endpoint)
      .doc<Coffee>(id)
      .valueChanges();
  }

  deleteCoffee(index: number) {
    this.coffeeList.splice(index, 1);
  }
}
