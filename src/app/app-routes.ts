import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {InsuranceComponent} from './insurance/insurance.component';
import {PriceOffersComponent} from './price-offers/components/price-offers/price-offers.component';
import {PersonalInfoComponent} from './personal-info/components/personal-info/personal-info.component';
import {CarInsuranceComponent} from './insurance/car-insurance/car-insurance.component';
import {HouseInsuranceComponent} from './insurance/house-insurance/house-insurance.component';
import {BusinessInsuranceComponent} from './insurance/business-insurance/business-insurance.component';
import {LifeInsuranceComponent} from './insurance/life-insurance/life-insurance.component';
import {HealthInsuranceComponent} from './insurance/health-insurance/health-insurance.component';
import {PensionComponent} from './insurance/pension/pension.component';
import {TravelInsuranceComponent} from './insurance/travel-insurance/travel-insurance.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';


const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'insurance', children: [
      {path: 'car', component: CarInsuranceComponent},
      {path: 'house', component: HouseInsuranceComponent},
      {path: 'business', component: BusinessInsuranceComponent},
      {path: 'travel', component: TravelInsuranceComponent},
      {path: 'life', component: LifeInsuranceComponent},
      {path: 'health', component: HealthInsuranceComponent},
      {path: 'health', component: HealthInsuranceComponent},
      {path: 'pension-saving', component: PensionComponent},
    ]},
  {path: 'price-offers', component: PriceOffersComponent},
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
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
