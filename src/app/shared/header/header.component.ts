import {Component} from '@angular/core';
import {headerConfig, Page} from './header.config';
import {UserAgentService} from '../../core/services/user-agent.service';

@Component({
  selector: 'oi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems: Page[];
  public isMenuOpen: boolean;
  private readonly isMobile: boolean;

  constructor() {
    this.menuItems = headerConfig.pages;
    this.isMenuOpen = false;
    this.isMobile = UserAgentService.isMobile();
  }

  toggleMenu() {
    if (this.isMobile) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

}
