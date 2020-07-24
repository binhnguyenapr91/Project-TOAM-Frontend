import {IAddress} from './IAddress';

export interface IProperty {
  id: number;
  name: string;
  image: string;
  video: string;
  address: IAddress;
  size: number;
  price: number;
}
