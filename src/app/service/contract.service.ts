import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IComment} from "../interface/IComment";
import {environment} from "../../environments/environment";
import {IContract} from "../interface/IContract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  shouldRefresh = new Subject<any>();
  constructor(private http:HttpClient) { }

  getContractAccountId(accountId:number):Observable<IContract[]>{
    return this.http.get<IContract[]>(`${environment.apiCotractRenter}${accountId}`)
  }
}
