import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Coffee } from '../Models/Entities/Coffee';
import { CoffeeService } from '../Services/coffee.service';
import { fakeCoffeeList, FirestoreStub } from '../Services/Testing/test.assets';
import { CoffeeDeleteComponent } from './coffee-delete.component';

describe('CoffeeDeleteComponent', () => {
  let component: CoffeeDeleteComponent;
  let fixture: ComponentFixture<CoffeeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, MDBBootstrapModule.forRoot()],
      declarations: [CoffeeDeleteComponent],
      providers: [CoffeeService, { provide: AngularFirestore, useValue: FirestoreStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a newly added coffee when `delete` is called', () => {
    const coffee: Coffee = {
      id: '123',
      name: 'FakeCoffee',
      rating: 10,
      roaster: 'FakeRoaster'
    };

    const originalLength = fakeCoffeeList.length;

    const service: CoffeeService = TestBed.get(CoffeeService);
    service.add(coffee).then(res => {});

    const lengthAfterAdd = fakeCoffeeList.length;

    service.delete('123');
    const lengthAfterDelete = fakeCoffeeList.length;
    expect(originalLength).toBe(lengthAfterDelete);
    expect(originalLength).toBe(lengthAfterAdd - 1);
  });
});
