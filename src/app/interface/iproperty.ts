import {IAddress} from './IAddress';
import {IPropertyType} from './IPropertyType';
import {IAccount} from './IAccount';

export interface IProperty {
  id: number;
  name: string;
  images: string;
  video: string;
  addresses: IAddress;
  size: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  propertyType: IPropertyType;
  host: IAccount;
}
