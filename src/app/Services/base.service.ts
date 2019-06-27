import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBaseEntity } from '../Models/Entities/IBaseEntity';
import { IBaseService } from './IBaseService';

export abstract class BaseService<T extends IBaseEntity> implements IBaseService<T> {
  protected collection: AngularFirestoreCollection<T>;

  constructor(path: string, protected afs: AngularFirestore) {
    this.collection = this.afs.collection(path);
  }

  get(id: string): Observable<T> {
    console.log('[BaseService] get: ', id);
    return this.collection
      .doc<T>(id)
      .snapshotChanges()
      .pipe(
        map(action => {
          if (action.payload.exists) {
            const data = action.payload.data();
            const payloadId = action.payload.id;
            return { payloadId, ...data };
          }
        })
      );
  }

  list(): Observable<T[]> {
    console.log('[BaseService] list');
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  add(item: T): Promise<T> {
    const subject = new Subject<T>();

    console.log('[BaseService] adding: ', item);
    this.collection.add(item).then(ref => {
      const newItem = {
        id: ref.id,
        ...(item as any) /* workaround until spreads work with generic types */
      };
      ref.set(newItem);
      subject.next(newItem);
    });

    return subject.asObservable().toPromise();
  }

  update(item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): void {
    throw new Error('Method not implemented.');
  }
}