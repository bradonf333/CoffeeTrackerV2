import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from '../app.config';
import { Coffee } from '../Models/Entities/Coffee';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService extends BaseService<Coffee> {
  constructor(afs: AngularFirestore) {
    const path = config.collection_endpoint;
    super(path, afs);
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

  /** Return a Coffee from the DB */
  getCoffee(id: string) {
    return this.afs
      .collection(config.collection_endpoint)
      .doc<Coffee>(id)
      .valueChanges();
  }
}
