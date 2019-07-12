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
}
