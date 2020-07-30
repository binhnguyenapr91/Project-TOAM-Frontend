import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IAddress} from '../interface/IAddress';
import {IAccount} from '../interface/IAccount';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly API_URL = 'http://localhost:8080/api/address';
  // private readonly API_URL1 = 'http://localhost:8080/api/address/newAddress';
  constructor(private httpClient: HttpClient) {
  }

  shouldRefresh = new Subject<any>();

  getAllAddress(): Observable<IAddress[]> {
    return this.httpClient.get<IAddress[]>(this.API_URL);
  }

  createAddress(address: IAddress): Observable<IAddress> {
    return this.httpClient.post<IAddress>(this.API_URL, address);
  }

  deleteAddress(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  updateAddress(address: IAddress): Observable<IAddress> {
    return this.httpClient.put<IAddress>(this.API_URL, address);
  }

  getAddressById(id: string): Observable<IAddress> {
    return this.httpClient.get<IAddress>(`${this.API_URL}/${id}`);
  }
}
