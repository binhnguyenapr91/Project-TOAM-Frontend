import {IDistrict} from './IDistrict';

export interface IAddress {
  id: number;
  street: string;
  districts: IDistrict;
}
