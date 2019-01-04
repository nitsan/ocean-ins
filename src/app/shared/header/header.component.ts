import {Component, OnInit} from '@angular/core';
import {headerConfig, IPage} from './header.config';
import {UserAgentService} from '../../core/services/user-agent.service';

@Component({
  selector: 'oi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems: IPage[];
  public isMenuOpen: boolean;
  private readonly isMobile: boolean;

  constructor(private userAgentService: UserAgentService) {
    this.menuItems = headerConfig.pages;
    this.isMenuOpen = false;
    this.isMobile = userAgentService.isMobile();
  }

  ngOnInit() {

  }

  toggleMenu() {
    if (this.isMobile) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

}
