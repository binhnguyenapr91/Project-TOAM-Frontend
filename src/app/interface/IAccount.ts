import {IRole} from './IRole';

export interface IAccount {
  id: number;
  name: string;
  username: string;
  password: string;
  role: IRole;
}

