import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from '../app-routes';
import {ButtonComponent} from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, ButtonComponent],
  exports: [
    HeaderComponent,
    ButtonComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
