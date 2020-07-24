import {ICity} from './icity';

export interface IDistrict {
  id: number;
  name: string;
  city: ICity;
}
