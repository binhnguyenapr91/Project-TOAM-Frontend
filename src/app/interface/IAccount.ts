import {IRole} from './IRole';

export interface IAccount {
  id: number;
  name: string;
  username: string;
  password: string;
  status: boolean;
  phone: string;
  email: string;
  token: string; // thuan
}

