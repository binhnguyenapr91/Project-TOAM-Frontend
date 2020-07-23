import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {environment} from "../../environments/environment";
import {IAccount} from "../interface/IAccount";

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IAccount[]>(`${environment.RegisterUrl}`);
  }

  register(user: IAccount) {
    return this.http.post(`${environment.RegisterUrl}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.RegisterUrl}/${id}`);
  }
}
