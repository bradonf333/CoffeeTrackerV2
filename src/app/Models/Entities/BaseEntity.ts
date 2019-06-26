import { IBaseEntity } from './IBaseEntity';

export class BaseEntity implements IBaseEntity {
  id?: string;
  name: string;
}
