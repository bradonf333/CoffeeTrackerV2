import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CoffeeServiceStub } from '../coffee-details/coffee-details.component.spec';
import { CoffeeService } from '../Services/coffee.service';
import { CoffeeCreateComponent } from './coffee-create.component';

describe('CoffeeCreateComponent', () => {
  let component: CoffeeCreateComponent;
  let fixture: ComponentFixture<CoffeeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, MDBBootstrapModule.forRoot()],
      declarations: [CoffeeCreateComponent],
      providers: [{ provide: CoffeeService, useClass: CoffeeServiceStub }]
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
