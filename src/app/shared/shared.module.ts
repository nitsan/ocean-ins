import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from '../app-routes';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
