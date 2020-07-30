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
  private readonly API_HOST = 'http://localhost:8080/api/account/host';
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

  getAccountById(id: number): Observable<IAccount> {
    return this.httpClient.get<IAccount>(`${this.API_URL}/${id}`);
  }

  getListRenter(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(this.API_RENTER);
  }

  getHostList(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(this.API_HOST);
  }

  getDetail(id: number): Observable<IAccount> {
    return this.httpClient.get<IAccount>(`${this.API_DETAIL}/${id}`);
  }

  deleteAccount(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/delete/${id}`);
  }

  getAccountById(id: number): Observable<IAccount> {
    return this.httpClient.get<IAccount>(`${this.API_URL}/${id}`);
  }

  updateAccount(account: IAccount): Observable<IAccount> {
    return this.httpClient.put<IAccount>(this.API_URL, account);
  }

  createAccount(account: IAccount): Observable<IAccount> {
    return this.httpClient.post<IAccount>(this.API_URL, account);
  }

  affectStatusAccountById(id: number): Observable<IAccount> {
    // @ts-ignore
    return this.httpClient.post<IAccount>(`${this.API_URL}/edit/${id}`);
  }
}
