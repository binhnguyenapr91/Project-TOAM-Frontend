import {IAccount} from "./IAccount";
import {IProperty} from "./iproperty";


export interface IComment {
  id: number;
  comment: string;
  account: IAccount;
  properties: IProperty;
}
