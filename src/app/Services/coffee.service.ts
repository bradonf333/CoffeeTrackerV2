import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
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
}

export class CoffeeServiceMock extends BaseService<Coffee> {
  // constructor(afs: AngularFirestoreStub) {
  //   const path = config.collection_endpoint;
  //   super(path, afs);
  // }

  get(id: string): Observable<Coffee> {
    const coffee: Coffee = {
      id: '1',
      name: 'El Vapor',
      roaster: 'Jack Mormon',
      rating: 7
    };
    return of(coffee);
  }
}
