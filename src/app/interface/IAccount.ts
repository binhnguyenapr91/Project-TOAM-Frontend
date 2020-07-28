import {IRole} from './IRole';

export interface IAccount {
  id: number;
  name: string;
  username: string;
  password: string;
  status: boolean;
  email: string;
  phone: string;
  // role: IRole;
  token: string; // thuan
}

