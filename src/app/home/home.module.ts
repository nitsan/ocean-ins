import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SlideshowModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
