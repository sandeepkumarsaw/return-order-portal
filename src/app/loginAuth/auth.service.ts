import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginURL = "https://localhost:44361/api/Authentication/login";
  constructor(private http: HttpClient) { }

  loginUser(user: any) {
    return this.http.post<any>(this._loginURL, user, {headers: new HttpHeaders({ "Content-Type": "application/json"}) } )
  }
}
