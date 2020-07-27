import {IRole} from './IRole';

export interface IAccount {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  status: boolean;
  role: IRole;
  token: string; // thuan
}

