import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IDistrict} from '../interface/IDistrict';
import {IHostIncome} from '../interface/IHostIncome';

@Injectable({
  providedIn: 'root'
})
export class HostIncomeService {
  private readonly API_URL = 'http://localhost:8080/api/host/value';
  private readonly API_URL1 = 'http://localhost:8080/api/host/allValue';
  private readonly API_URL2 = 'http://localhost:8080/api/host/contractsQuantity';
  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) {
  }

  getHostIncomeList(): Observable<IHostIncome[]> {
    // return this.httpClient.get<IHostIncome[]>(this.API_URL);
    return this.httpClient.post<IHostIncome[]>(this.API_URL, HttpClient);
  }

  getAmount(): Observable<number> {
    return this.httpClient.post<number>(this.API_URL1, HttpClient);
  }

  getAllContractsQuan(): Observable<number> {
    return this.httpClient.post<number>(this.API_URL2, HttpClient);
  }
}
