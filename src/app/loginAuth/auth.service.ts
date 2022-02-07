import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginURL = "https://authrization.azurewebsites.net/api/Authentication/login";
  
  constructor(private http: HttpClient,
              private _router: Router) {}

  loginUser(user: any) {
    return this.http.post<any>( this._loginURL, user, { headers: new HttpHeaders({ "Content-Type": "application/json" }) } )
  }

  isUserLoggedIn() {
    return !!localStorage.getItem("token") && !!localStorage.getItem("username"); 
  }

  logoutUser() {
    localStorage.clear()
    this._router.navigate(['login'])
  }
}
