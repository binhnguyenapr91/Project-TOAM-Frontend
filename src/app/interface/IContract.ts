import {IAccount} from './IAccount';
import {IProperty} from './iproperty';
export interface IContract {
  id: number;
  checkinTime: Date;
  checkoutTime: Date;
  createTime: Date;
  host: IAccount;
  property: IProperty;
  renter: IAccount;
  contractStatus: number;
}
