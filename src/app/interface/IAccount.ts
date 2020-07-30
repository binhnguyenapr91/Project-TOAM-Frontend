import {IRole} from './IRole';

export interface IAccount {
  id: number;
  name: string;
  username: string;
  createdDate: Date
  password: string;
  status: boolean;
  phone: string;
  email: string;
  create_date: string;
  // role: IRole;
  token: string; // thuan
}

