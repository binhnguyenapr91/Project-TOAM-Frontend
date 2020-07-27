import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ICity} from "../interface/icity";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private readonly API_URL = 'http://localhost:8080/api/city';

  constructor(private  httpClient: HttpClient) {
  }

  getListCities(): Observable<ICity[]> {
    return this.httpClient.get<ICity[]>(this.API_URL);
  }
}
