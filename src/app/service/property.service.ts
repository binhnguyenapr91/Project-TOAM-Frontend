import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IProperty} from '../interface/iproperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  // tslint:disable-next-line:variable-name
  private readonly API_URL = 'http://localhost:8080/api/property';
  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) {
  }

  getListProperty(): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>(this.API_URL);
  }
}
