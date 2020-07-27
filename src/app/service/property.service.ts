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
<<<<<<< HEAD

=======
>>>>>>> 99f10df2efb6d3501998ab8e73240091ca33f0d7
  constructor(private httpClient: HttpClient) {
  }

  getListProperty(): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>(this.API_URL);
  }

<<<<<<< HEAD
  getPropertyById(id: number): Observable<IProperty> {
    return this.httpClient.get<IProperty>(`${this.API_URL}/${id}`);
=======
  createProperty(property: IProperty): Observable<IProperty> {
    return this.httpClient.post<IProperty>(this.API_URL, property);
  }
  deleteProperty(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
>>>>>>> 99f10df2efb6d3501998ab8e73240091ca33f0d7
  }
}
