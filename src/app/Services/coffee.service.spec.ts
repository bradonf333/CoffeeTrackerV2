import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { CoffeeService } from './coffee.service';

class AngularFirestoreStub {}

describe('CoffeeService: My: TestBed', () => {
  let service: CoffeeService;
  let afs: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoffeeService,
        { provide: AngularFirestore, useClass: AngularFirestoreStub }
      ]
    });

    service = TestBed.get(CoffeeService);
    afs = TestBed.get(AngularFirestore);
  });

  it('should create an instance', () => {
    expect(service).toBeDefined();
  });
});
