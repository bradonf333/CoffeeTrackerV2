import { BehaviorSubject, Observable, of } from 'rxjs';
import { Coffee } from 'src/app/Models/Entities/Coffee';

export const fakeCoffeeList: Coffee[] = [
  { id: '1', name: 'El Vapor', roaster: 'Jack Mormon', rating: 7 },
  { id: '2', name: 'La Bicicletta', roaster: 'Doma Coffee Roasters', rating: 7.5 },
  { id: '3', name: 'Little Italy', roaster: 'Bird Rock', rating: 9 }
];

const coffeeObs: Observable<Coffee[]> = of(fakeCoffeeList);
const coffeeData: Observable<Coffee> = of(fakeCoffeeList[0]);

export const FirestoreStub = {
  collection: (name: string) => ({
    doc: (id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      snapshotChanges: () => ({
        pipe: () => coffeeData
      }),
      set: (d: any) => new Promise((resolve, reject) => resolve())
    }),
    snapshotChanges: () => ({
      pipe: () => coffeeObs
    })
  })
};
