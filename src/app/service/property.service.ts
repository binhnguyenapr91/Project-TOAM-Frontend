import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {IProperty} from '../iproperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private readonly API_URL = 'http://localhost:3000/properties';
  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  getPropertyById(id: number): Observable<IProperty> {
    return this.httpClient.get<IProperty>(`${this.API_URL}/${id}`);
  }
}
