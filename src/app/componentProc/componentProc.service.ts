import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentProcService {

  private _componentProcURL = "https://component-processing.azurewebsites.net/api/ProcessDetail";
  private _completeProcURL = "https://component-processing.azurewebsites.net/api/CompleteProcessing";
  
  constructor(private http: HttpClient) { }

  createHeaders() {
    return new HttpHeaders({ "Content-Type": "application/json", "username": localStorage.getItem("username"), "token": localStorage.getItem("token") })
  }

  sendProcessDetailData(componentProcDetail: any) {
    return this.http.post<any>(this._componentProcURL, componentProcDetail, { headers: this.createHeaders() })
  }

  sendCompleteProcData(completeProcDetail: any) {
    return this.http.post<any>(this._completeProcURL, completeProcDetail, { headers: this.createHeaders() })
  }
}