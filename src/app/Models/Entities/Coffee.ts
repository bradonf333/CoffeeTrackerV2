import { BaseEntity } from './BaseEntity';

export class Coffee extends BaseEntity {
  id?: string;
  name: string;
  roaster: string;
  // roastDate: string;
  // regions: string[];
  rating: number;
  // flavors: string[];
  // TODO: This will be for future use. Once I start tracking daily espresso shots, I will use this.
  // date: string;
  // notes?: string;

  // constructor(name: string, roaster: string, rating: number) {
  //   this.id = '123';
  //   this.name = name;
  //   this.roaster = roaster;
  //   this.rating = rating;
  // }
}
