import {IRole} from './IRole';

export interface IAccount {
  id: number;
  name: string;
  username: string;
  password: string;
  status: boolean;
  phone: string;
  email: string;
  // role: IRole;
  token: string; // thuan
}

