import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from '../Services/coffee.service';
import { fakeCoffeeList, FirestoreStub } from '../Services/Testing/test.assets';
import { CoffeeCreateComponent } from './coffee-create.component';

describe('CoffeeCreateComponent', () => {
  let component: CoffeeCreateComponent;
  let fixture: ComponentFixture<CoffeeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, MDBBootstrapModule.forRoot()],
      declarations: [CoffeeCreateComponent],
      providers: [CoffeeService, { provide: AngularFirestore, useValue: FirestoreStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new Coffee to CoffeeList when add is called, with valid coffee object', () => {
    const coffee: Coffee = {
      id: '123',
      name: 'FakeCoffee',
      rating: 10,
      roaster: 'FakeRoaster'
    };

    const expectedLength = fakeCoffeeList.length + 1;
    const service: CoffeeService = TestBed.get(CoffeeService);

    service.add(coffee).then(res => {});
    const actualLength = fakeCoffeeList.length;
    const actualCoffee = fakeCoffeeList[fakeCoffeeList.length - 1];

    expect(expectedLength).toBe(actualLength);
    expect(coffee).toEqual(actualCoffee);
  });
});
