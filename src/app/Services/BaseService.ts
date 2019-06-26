import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IBaseService } from '../Models/IBaseService';
import { IBaseEntity } from '../Models/Entities/IBaseEntity';

export abstract class BaseService<T extends IBaseEntity> implements IBaseService<T> {
  protected collection: AngularFirestoreCollection<T>;

  get(id: string): import('rxjs').Observable<T> {
    throw new Error('Method not implemented.');
  }

  list(): import('rxjs').Observable<T[]> {
    throw new Error('Method not implemented.');
  }

  add(item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }

  update(item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): void {
    throw new Error('Method not implemented.');
  }

  constructor(path: string, protected afs: AngularFirestore) {
    this.collection = this.afs.collection(path);
  }
}
