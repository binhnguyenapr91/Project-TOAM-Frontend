import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAccount} from '../interface/IAccount';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly API_URL = 'http://localhost:8080/api/property';

  constructor(private  httpClient: HttpClient) {
  }

  Register(account: IAccount): Observable<IAccount> {
    return this.httpClient.post<IAccount>(this.API_URL, account);
  }
}
