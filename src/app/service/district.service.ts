import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDistrict} from "../interface/IDistrict";
import {ICity} from "../interface/icity";

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  private readonly API_URL = 'http://localhost:8080/api/district';

  constructor(private httpClient: HttpClient) {
  }

  getListDistricts(): Observable<IDistrict[]> {
    return this.httpClient.get<IDistrict[]>(this.API_URL);
  }
}
