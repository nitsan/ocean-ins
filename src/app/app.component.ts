import { Component } from '@angular/core';
import { UserAuthService } from './core/services/user-auth.service';

@Component({
  selector: 'oi-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(userAuthService: UserAuthService) {
    userAuthService.setUserId();
  }
}
