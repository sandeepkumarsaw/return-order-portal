import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dispErrText = false
  errText: any
  loginUserData = {
    username: null,
    password: null
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {}

  loginUser() {
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('username', res.userId)
          localStorage.setItem('token', res.token)
          this._router.navigate(['component-processing'])
        },
      err => {
        console.log(err)
        this.errText = err.statusText
        this.dispErrText = true
      }
    )
  }
}
