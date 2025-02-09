import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorHandler, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routes';
import { AboutModule } from './about/about.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { InsuranceModule } from './insurance/insurance.module';
import { PriceOffersModule } from './price-offers/price-offers.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SentryErrorHandler } from './core/services/sentry-error-handler';
import { CookieService } from 'ngx-cookie-service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    AppRoutingModule,
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
  providers: [
    {provide: ErrorHandler, useClass: SentryErrorHandler},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
