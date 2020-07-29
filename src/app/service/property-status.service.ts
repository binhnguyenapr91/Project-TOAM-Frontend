import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPropertyType} from '../interface/IPropertyType';
import {IPropertyStatus} from '../interface/IPropertyStatus';

@Injectable({
  providedIn: 'root'
})
export class PropertyStatusService {
  private readonly API_URL = 'http://localhost:8080/api/propertyStatus';

  constructor(private httpClient: HttpClient) {
  }

  getAllPropertiesStatus(): Observable<IPropertyStatus[]> {
    return this.httpClient.get<IPropertyStatus[]>(this.API_URL);
  }
}
