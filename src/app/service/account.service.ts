import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAccount} from '../interface/IAccount';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly API_URL = 'http://localhost:8080/api/property';
  shouldRefresh = new Subject<any>();

  constructor(private  httpClient: HttpClient) {
  }

  Register(account: IAccount): Observable<IAccount> {
    return this.httpClient.post<IAccount>(this.API_URL, account);
  }

  getListAccount(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(this.API_URL);
  }
}
