import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContract} from '../interface/IContract';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  API_BOOKING = 'http://localhost:8080/api/contract/';
  constructor(private httpClient: HttpClient) { }

  createBooking(contract: IContract): Observable<IContract> {
    return this.httpClient.post<IContract>(this.API_BOOKING, contract);
  }
}
