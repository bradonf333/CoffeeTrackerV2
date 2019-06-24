import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Coffee } from '../Models/Coffee';
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

const collectionStub = {
  snapshotChanges: jasmine.createSpy('snapShotChanges').and.returnValue(data),
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
    service.getAllCoffeesFS().subscribe(coffeeData => {
      const coffees = coffeeData;
    });
  });

  it('should return a single Coffee with getCoffee', () => {
    service.getCoffee('1').subscribe(coffeeData => {
      const coffee = coffeeData;
    });
  });
});
