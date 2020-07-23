import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRole} from '../interface/IRole';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly API_URL = 'http://localhost:8080/api/role';
  private hostAccountURL = environment.accountUrl;
  private renterAccountURL = environment.idAccountUrl;

  constructor(private httpClient: HttpClient) {
  }

  getAllRole(): Observable<IRole[]> {
    return this.httpClient.get<IRole[]>(this.API_URL);
  }

  getRoleHost(): Observable<IRole> {
    return this.httpClient.get<IRole>(this.hostAccountURL);
  }

  getRoleRenter(): Observable<IRole> {
    return this.httpClient.get<IRole>(this.renterAccountURL);
  }
}
