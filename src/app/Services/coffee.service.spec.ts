import { Coffee } from '../Models/Coffee';
import { CoffeeService } from './coffee.service';

describe('CoffeeService', () => {
  let service: CoffeeService;
  beforeEach(() => {
    service = new CoffeeService();
  });

  it('addCoffee should add test coffee to CoffeeList', () => {
    console.log(
      `Current Length of the Coffee List before test: ${service.coffeeList.length}`
    );
    const coffee = new Coffee('TestCoffee', 'TestRoaster', 1.5);
    service.addCoffee(coffee);
    console.log(
      `Current Length of the Coffee List after test: ${service.coffeeList.length}`
    );
    expect(service.coffeeList.length).toBeGreaterThanOrEqual(1);
  });

  it('getCoffees should return CoffeeList', () => {
    const coffee = new Coffee('TestCoffee', 'TestRoaster', 1.5);
    service.addCoffee(coffee);
    const coffeeList = service.getCoffees();
    console.log(
      `Current Length of the Coffee List after getting it from the service: ${
        coffeeList.length
      }`
    );
    expect(coffeeList.length).toBeGreaterThanOrEqual(1);
  });

  it('deleteCoffee should remove newly added Coffee from CoffeeList', () => {
    const coffee = new Coffee('TestCoffee', 'TestRoaster', 1.5);
    const expectedLength = service.coffeeList.length;
    console.log(`Current Length of the Coffee List before test: ${expectedLength}`);
    service.addCoffee(coffee);
    const index = expectedLength - 1;
    service.deleteCoffee(index);
    const actualLength = service.coffeeList.length;
    console.log(`Current Length of the Coffee List after test: ${actualLength}`);
    expect(expectedLength).toEqual(actualLength);
  });
});
