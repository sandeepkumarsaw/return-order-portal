import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentProcService {

  private _processDetailURL = environment.componentProcessing;
  private _completeProcessingURL = environment.componentProcessing;
  
  constructor(private http: HttpClient) { }

  createHeaders() {
    return new HttpHeaders({ "Content-Type": "application/json", "username": localStorage.getItem("username"), "token": localStorage.getItem("token") })
  }

  sendProcessDetailData(componentProcDetail: any) {
    return this.http.post<any>(this._processDetailURL + "/api/ProcessDetail", componentProcDetail, { headers: this.createHeaders() })
  }

  sendCompleteProcData(completeProcDetail: any) {
    return this.http.post<any>(this._completeProcessingURL + "/api/CompleteProcessing", completeProcDetail, { headers: this.createHeaders() })
  }
}