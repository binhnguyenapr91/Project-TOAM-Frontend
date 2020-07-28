import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPropertyType} from '../interface/IPropertyType';

@Injectable({
  providedIn: 'root'
})
export class PropertiesTypeService {
  private readonly API_URL = 'http://localhost:8080/api/propertiesType';

  constructor(private httpClient: HttpClient) {
  }

  getAllPropertiesType(): Observable<IPropertyType[]> {
    return this.httpClient.get<IPropertyType[]>(this.API_URL);
  }
}
