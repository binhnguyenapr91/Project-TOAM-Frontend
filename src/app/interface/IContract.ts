import {IAccount} from './IAccount';
import {IProperty} from './iproperty';
export interface IContract {
  id?: number;
  beginTime?: Date;
  endTime?: Date;
  createTime?: Date;
  host?: IAccount;
  properties?: IProperty;
  renter?: IAccount;
  contractStatus?: number;
}
