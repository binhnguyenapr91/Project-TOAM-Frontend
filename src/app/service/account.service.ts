import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IAccount} from '../interface/IAccount';

import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly API_URL = 'http://localhost:8080/api/account';

  shouldRefresh = new Subject<any>();

  private registerURL = environment.RegisterUrl;
  private readonly API_RENTER = 'http://localhost:8080/api/account/renter';
  private readonly API_DETAIL = 'http://localhost:8080/api/account';
  constructor(private  httpClient: HttpClient) {
  }

  Register(account: IAccount): Observable<IAccount> {
    console.log(account);
    return this.httpClient.post<IAccount>(this.registerURL, account, httpOptions);
  }

  getListAccount(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(this.registerURL, httpOptions);
  }

  getListHost(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(this.registerURL, httpOptions);
  }

  getListRenter(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(this.API_RENTER);
  }

  getDetail(id: number): Observable<IAccount> {
    return this.httpClient.get<IAccount>(`${this.API_DETAIL}/${id}`);
  }

  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
