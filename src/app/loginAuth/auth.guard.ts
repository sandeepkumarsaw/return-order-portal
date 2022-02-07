import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isUserLoggedIn())
    {  
      this.router.navigate(['login']);
    }
    else {
      this.router.navigate(['component-processing']);
    }
    return this.authService.isUserLoggedIn();
  }
  
}
