import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  loginUserForm: FormGroup

  constructor(private _auth: AuthService, private _formBuil: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    
    if(this._auth.isUserLoggedIn())
    { this._router.navigate(['comp-proc']) }
    
    this.loginUserForm = this._formBuil.group( {
      username: [null, Validators.required],
      password: [null, Validators.required]
    } )
  }

  loginUser() {

    if(!this.loginUserForm.valid) { return }
    
    let loginUserObj = {
      username: this.loginUserForm.get('username').value,
      password: this.loginUserForm.get('password').value
    }

    console.log(loginUserObj)
    
    this._auth.loginUser(loginUserObj)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('username', res.userId)
          localStorage.setItem('token', res.token)
          this._router.navigate(['home-page'])
        },
      err => {
        console.log(err)
        this.errText = err.statusText
        this.dispErrText = true
      }
    )
  }
}
