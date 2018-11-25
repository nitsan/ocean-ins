import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routes';
import {AboutModule} from './about/about.module';
import {ContactUsModule} from './contact-us/contact-us.module';
import {InsuranceModule} from './insurance/insurance.module';
import {PriceOffersModule} from './price-offers/price-offers.module';
import {PersonalInfoModule} from './personal-info/personal-info.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ContactUsModule,
    InsuranceModule,
    PriceOffersModule,
    PersonalInfoModule,
    ReactiveFormsModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
