import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompProcService {

  private _compProcURL = "https://localhost:44381/api/ProcessDetail";
  constructor(private http: HttpClient) { }

  sendData(user: any) {
    return this.http.post<any>(this._compProcURL, user, {headers: new HttpHeaders({ "Content-Type": "application/json"}) } )
  }
}