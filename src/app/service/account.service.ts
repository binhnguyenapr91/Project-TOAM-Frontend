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

  shouldRefresh = new Subject<any>();

  private registerURL = environment.RegisterUrl;


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
}
