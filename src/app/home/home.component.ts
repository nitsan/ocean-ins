import {Component} from '@angular/core';
import {homeConfig} from './home.config';

@Component({
  selector: 'oi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public readonly insurances;
  public readonly articles;
  public readonly images;

  constructor() {
    this.insurances = homeConfig.insurances;
    this.articles = homeConfig.articles;
    this.images = homeConfig.images;
  }

}
