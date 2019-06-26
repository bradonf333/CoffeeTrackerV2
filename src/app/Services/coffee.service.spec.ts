import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from './coffee.service';

const coffeeList: Coffee[] = [
  { id: '1', name: 'El Vapor', roaster: 'Jack Mormon', rating: 7 },
  { id: '2', name: 'La Bicicletta', roaster: 'Doma Coffee Roasters', rating: 7.5 },
  { id: '3', name: 'Little Italy', roaster: 'Bird Rock', rating: 9 }
];

const data: Observable<Coffee[]> = of(coffeeList);
const docData: Observable<Coffee> = of(coffeeList[0]);

const docStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(docData)
};

const pipeStub = {

};

const snapshotChangesStub = {
  pipe: jasmine.createSpy('pipe').and.returnValue(data)
};

const collectionStub = {
  snapshotChanges: jasmine
    .createSpy('snapShotChanges')
    .and.returnValue(snapshotChangesStub),
  doc: jasmine.createSpy('doc').and.returnValue(docStub)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('CoffeeService: My: TestBed', () => {
  let service: CoffeeService;
  let afs: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoffeeService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });

    service = TestBed.get(CoffeeService);
    afs = TestBed.get(AngularFirestore);
  });

  it('should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('should initialize Coffees with getCoffeesFS', () => {
    let coffees: Coffee[];
    service.getAllCoffeesFS().subscribe(coffeeData => {
      coffees = coffeeData;
      console.log('Coffees: ', coffees);
    });

    expect(true).toBeTruthy();
  });

  it('should return a single Coffee with getCoffee', () => {
    const testCoffee = coffeeList[0];
    let actualCoffee: Coffee;
    service.getCoffee(testCoffee.id).subscribe(coffeeData => {
      actualCoffee = coffeeData;
    });

    console.log('Actual Coffee: ', actualCoffee);
    console.log('Test Coffee: ', testCoffee);
    expect(actualCoffee).toBe(testCoffee);
  });
});
