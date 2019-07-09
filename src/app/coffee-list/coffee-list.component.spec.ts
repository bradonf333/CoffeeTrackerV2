import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from '../Services/coffee.service';
import { CoffeeListComponent } from './coffee-list.component';

const coffeeList: Coffee[] = [
  { id: '1', name: 'El Vapor', roaster: 'Jack Mormon', rating: 7 },
  { id: '2', name: 'La Bicicletta', roaster: 'Doma Coffee Roasters', rating: 7.5 },
  { id: '3', name: 'Little Italy', roaster: 'Bird Rock', rating: 9 }
];

const data: Observable<Coffee[]> = of(coffeeList);
const docData: Observable<Coffee> = of(coffeeList[0]);

const pipeStub = {};

const snapshotChangesStub = {
  pipe: jasmine.createSpy('pipe').and.returnValue(data)
};

const docStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(docData),
  snapshotChanges: jasmine
    .createSpy('snapShotChanges')
    .and.returnValue(snapshotChangesStub)
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

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CoffeeListComponent],
      providers: [
        CoffeeService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const service = TestBed.get(CoffeeService);
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return Coffees when getCoffeesFS is called', () => {
  //   const coffees$: Coffee[] = [];
  //   const service = fixture.debugElement.injector.get(CoffeeService);
  //   this.coffees$ = this.coffeeService.get();
  //   expect(coffees$.length).toBe(3);
  // });

  it('should return Coffees when get is called', () => {
    const service = TestBed.get(CoffeeService);
    const coffee$ = service.get();
    console.log('Hello', coffee$);
  });
});
