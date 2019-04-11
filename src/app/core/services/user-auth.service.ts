import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

declare class FS {
  public static identify: (uid: string) => void;
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private readonly userIdKey = 'userId';
  private readonly userId: string;

  constructor(private cookieService: CookieService) {
    this.userId = this.cookieService.get(this.userIdKey) || new Date().getTime().toString();
  }

  setUserId() {
    this.cookieService.set(this.userIdKey, this.userId);
    if (environment.production) {
      FS.identify(this.userId);
    }
  }
}
