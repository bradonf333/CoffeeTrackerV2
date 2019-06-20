import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCreateComponent } from './coffee-create.component';

describe('CoffeeCreateComponent', () => {
  let component: CoffeeCreateComponent;
  let fixture: ComponentFixture<CoffeeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeCreateComponent ]
    })
    .compileComponents();
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
