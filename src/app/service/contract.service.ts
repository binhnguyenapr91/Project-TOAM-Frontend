import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IContract} from '../interface/IContract';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private readonly API_URL = 'http://localhost:8080/api/contract';

  shouldRefresh = new Subject<any>();

  constructor(private  httpClient: HttpClient) {
  }
  getAllContractByHostId(id: number): Observable<IContract> {
    return this.httpClient.get<IContract>(`${this.API_URL}/host/${id}`);
  }
  updateContract(contract: IContract): Observable<IContract> {
    return this.httpClient.put<IContract>(this.API_URL, contract);
  }
}
