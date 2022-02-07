import { Component } from '@angular/core';

import { AuthService } from './loginAuth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'return-order-portal';

  constructor(public _authService: AuthService) {}
}
