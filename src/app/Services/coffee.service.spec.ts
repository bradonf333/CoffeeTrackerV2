import { Coffee } from '../Models/Coffee';
import { CoffeeService } from './coffee.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('CoffeeService', () => {
  let service: CoffeeService;
  const expectedCoffeeId = '123';
  const expectedCoffeeName = 'TestCoffee';
  const expectedCoffeeRoaster = 'TestRoaster';
  const expectedCoffeeRating = 1.5;

  const testCoffee = new Coffee(
    expectedCoffeeName,
    expectedCoffeeRoaster,
    expectedCoffeeRating
  );

  beforeEach(() => {
    service = new CoffeeService();
  });

  it('addCoffee should add test coffee to CoffeeList', () => {
    console.log(
      `Current Length of the Coffee List before test: ${service.coffeeList.length}`
    );
    service.addCoffee(testCoffee);
    console.log(
      `Current Length of the Coffee List after test: ${service.coffeeList.length}`
    );
    expect(service.coffeeList.length).toBeGreaterThanOrEqual(1);
  });

  it('getAllCoffees should return CoffeeList', () => {
    service.addCoffee(testCoffee);
    const coffeeList = service.getAllCoffees();
    console.log(
      `Current Length of the Coffee List after getting it from the service: ${
        coffeeList.length
      }`
    );
    expect(coffeeList.length).toBeGreaterThanOrEqual(1);
  });

  it('getCoffee should return TestCoffee', () => {
    testCoffee.id = expectedCoffeeId;
    service.addCoffee(testCoffee);
    const coffeeFromService = service.getCoffee(expectedCoffeeId);
    expect(coffeeFromService.id).toEqual(expectedCoffeeId);
    expect(coffeeFromService.name).toEqual(expectedCoffeeName);
    expect(coffeeFromService.roaster).toEqual(expectedCoffeeRoaster);
    expect(coffeeFromService.rating).toEqual(expectedCoffeeRating);
  });

  it('deleteCoffee should remove newly added Coffee from CoffeeList', () => {
    const expectedLength = service.coffeeList.length;
    console.log(`Current Length of the Coffee List before test: ${expectedLength}`);
    service.addCoffee(testCoffee);
    const index = expectedLength - 1;
    service.deleteCoffee(index);
    const actualLength = service.coffeeList.length;
    console.log(`Current Length of the Coffee List after test: ${actualLength}`);
    expect(expectedLength).toEqual(actualLength);
  });
});
