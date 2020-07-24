import {IDistrict} from './IDistrict';

export interface IAddress {
  id: number;
  name: string;
  street: string;
  district: IDistrict;
}
