import {IAccount} from "./IAccount";

export interface IComment {
  id: number;
  content: string;
  commenter: IAccount;
}
