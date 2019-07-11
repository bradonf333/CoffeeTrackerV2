import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from '../Services/coffee.service';
import { fakeCoffeeList, FirestoreStub } from '../Services/Testing/test.assets';
import { CoffeeListComponent } from './coffee-list.component';

// const pipeStub = {};

// const snapshotChangesStub = {
//   pipe: jasmine.createSpy('pipe').and.returnValue(data)
// };

// const docStub = {
//   valueChanges: jasmine.createSpy('valueChanges').and.returnValue(docData),
//   snapshotChanges: jasmine
//     .createSpy('snapShotChanges')
//     .and.returnValue(snapshotChangesStub)
// };

// const collectionStub = {
//   snapshotChanges: jasmine
//     .createSpy('snapShotChanges')
//     .and.returnValue(snapshotChangesStub),
//   doc: jasmine.createSpy('doc').and.returnValue(docStub)
// };

// const angularFirestoreStub = {
//   collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
// };

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CoffeeListComponent],
      providers: [CoffeeService, { provide: AngularFirestore, useValue: FirestoreStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Coffees when list is called', () => {
    let coffees: Coffee[] = [];
    const service: CoffeeService = TestBed.get(CoffeeService);
    const coffee = service.list();
    coffee.subscribe((coffeesArray: Coffee[]) => {
      coffees = coffeesArray;
    });

    expect(coffees.length).toBe(fakeCoffeeList.length);
  });

  it('should return expected Coffe when get is called with id', () => {
    const expectedCoffee: Coffee = fakeCoffeeList[0];

    let coffee: Coffee;
    const service: CoffeeService = TestBed.get(CoffeeService);
    const coffeeObs = service.get('1');
    coffeeObs.subscribe((coffeeData: Coffee) => {
      coffee = coffeeData;
    });

    expect(expectedCoffee).toEqual(coffee);
  });

  /**
   * This test is more of a validation of the FireStoreStub.
   * This ensures I am returning the data I expect from the Stub.
   */
  it('should not return expected coffee when get is called with wrong id', () => {
    const expectedCoffee: Coffee = fakeCoffeeList[1];

    let coffee: Coffee;
    const service: CoffeeService = TestBed.get(CoffeeService);
    const coffeeObs = service.get('1'); // Doesn't matter what id is here. Stub returns hardcoded value anyway.
    coffeeObs.subscribe((coffeeData: Coffee) => {
      coffee = coffeeData;
    });

    expect(expectedCoffee).not.toEqual(coffee);
  });
});
