import { Component } from '@angular/core';
import { UserAuthService } from './core/services/user-auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SEOService } from './core/services/seo.service';

@Component({
  selector: 'oi-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(userAuthService: UserAuthService, router: Router, private seoService: SEOService) {
    userAuthService.setUserId();
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.seoService.updateTitleAndMetaTags(event.url);
    });
  }
}
