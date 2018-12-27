import {Component, OnInit} from '@angular/core';
import {headerConfig, IPage} from './header.config';

@Component({
  selector: 'oi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems: IPage[];
  public isMenuOpen: boolean;

  constructor() {
    this.menuItems = headerConfig.pages;
    this.isMenuOpen = false;
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
