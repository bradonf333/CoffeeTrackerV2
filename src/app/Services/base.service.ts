import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBaseEntity } from '../Models/Entities/IBaseEntity';
import { IBaseService } from './IBaseService';

@Injectable()
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
    console.log(`[BaseService] updating item ${item.id}`);

    const promise = new Promise<T>((resolve, reject) => {
      const docRef = this.collection
        .doc<T>(item.id)
        .set(item)
        .then(() => {
          resolve({
            ...(item as any)
          });
        });
    });
    return promise;
  }

  delete(id: string): void {
    console.log(`[BaseService] deleting item ${id}`);

    const docRef = this.collection.doc<T>(id).delete();
    // docRef.delete();

    // TODO: Original Code below, had to change to the above for testing.
    // TODO: Once I can confirm the new code above works, I will remove this.
    // const docRef = this.collection.doc<T>(id);
    // docRef.delete();
  }
}
