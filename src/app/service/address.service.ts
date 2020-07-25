import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAddress} from '../interface/IAddress';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly API_URL = 'http://localhost:8080/api/address';

  constructor(private httpClient: HttpClient) {
  }

  getAllAddress(): Observable<IAddress[]> {
    return this.httpClient.get<IAddress[]>(this.API_URL);
  }
}
