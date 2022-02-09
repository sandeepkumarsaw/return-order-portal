import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginURL = environment.authURL;
  
  constructor(private http: HttpClient,
              private _router: Router) {}

  loginUser(user: any) {
    return this.http.post<any>( this._loginURL + "/api/Authentication/login", user, { headers: new HttpHeaders({ "Content-Type": "application/json" }) } )
  }

  isUserLoggedIn() {
    return !!localStorage.getItem("token") && !!localStorage.getItem("username"); 
  }

  logoutUser() {
    localStorage.clear()
    this._router.navigate(['landing-page'])
  }
}
