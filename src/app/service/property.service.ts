import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IProperty} from '../interface/iproperty';
import {IPropertyType} from '../interface/IPropertyType';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  // tslint:disable-next-line:variable-name
  private readonly API_URL = 'http://localhost:8080/api/property';
  private readonly API = 'http://localhost:8080/api/property/type';
  private readonly API_ = 'http://localhost:8080/api/propertiesType';
  shouldRefresh = new Subject<any>();
  constructor(private httpClient: HttpClient) {
  }

  getListPropertyType(): Observable<IPropertyType[]> {
    return this.httpClient.get<IPropertyType[]>(this.API_);
  }

  getListProperty(): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>(this.API_URL);
  }

  createProperty(property: IProperty): Observable<IProperty> {
    return this.httpClient.post<IProperty>(this.API_URL, property);
  }

  deleteProperty(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  findPropertyByPropertyType(name: string): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>(`${this.API}/${name}`);
  }

  getPropertyById(id:number): Observable<IProperty>{
    return this.httpClient.get<IProperty>(`${this.API_URL}/${id}`);
  }
}
