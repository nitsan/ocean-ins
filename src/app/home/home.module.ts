import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SlideshowModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
