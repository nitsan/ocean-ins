import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/components/about/about.component';
import {ContactUsComponent} from './contact-us/components/contact-us/contact-us.component';
import {InsuranceComponent} from './insurance/components/insurance/insurance.component';
import {PriceOffersComponent} from './price-offers/components/price-offers/price-offers.component';
import {PersonalInfoComponent} from './personal-info/components/personal-info/personal-info.component';


const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'insurance', component: InsuranceComponent},
  {path: 'price-offers', component: PriceOffersComponent},
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: '**', component: AboutComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
