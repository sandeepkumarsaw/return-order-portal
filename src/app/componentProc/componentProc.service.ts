import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentProcService {

  private _componentProcURL = "https://localhost:44381/api/ProcessDetail";
  private _completeProcURL = "https://localhost:44381/api/CompleteProcessing";
  
  constructor(private http: HttpClient) { }

  sendProcessDetailData(componentProcDetail: any) {
    return this.http.post<any>(this._componentProcURL, componentProcDetail, {headers: new HttpHeaders({ "Content-Type": "application/json"}) })
  }

  sendCompleteProcData(completeProcDetail: any) {
    return this.http.post<any>(this._completeProcURL, completeProcDetail, {headers: new HttpHeaders({ "Content-Type": "application/json"})})
  }
}