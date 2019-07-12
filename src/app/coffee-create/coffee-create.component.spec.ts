import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CoffeeService } from '../Services/coffee.service';
import { FirestoreStub } from '../Services/Testing/test.assets';
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
});
