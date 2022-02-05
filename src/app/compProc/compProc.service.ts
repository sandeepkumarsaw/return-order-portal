import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class procDetailsService {

  private _compProcURL = "https://localhost:44381/api/ProcessDetail";
  constructor(private http: HttpClient) { }

  sendProcessDetailData(processDetail: any) {
    return this.http.post<any>(this._compProcURL, processDetail, {headers: new HttpHeaders({ "Content-Type": "application/json"}) } )
  }
}