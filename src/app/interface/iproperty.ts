import {IAddress} from './IAddress';
import {IPropertyType} from './IPropertyType';
import {IAccount} from './IAccount';

export interface IProperty {
  id: number;
  name: string;
  images: string;
<<<<<<< HEAD
  video: string;
=======
  videos: string;
>>>>>>> 99f10df2efb6d3501998ab8e73240091ca33f0d7
  addresses: IAddress;
  size: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  propertiesTypes: IPropertyType;
  host: IAccount;
}
