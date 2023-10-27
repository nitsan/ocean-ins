import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {PersonalInfoComponent} from './personal-info/components/personal-info/personal-info.component';
import {CarInsuranceComponent} from './insurance/car-insurance/car-insurance.component';
import {HouseInsuranceComponent} from './insurance/house-insurance/house-insurance.component';
import {BusinessInsuranceComponent} from './insurance/business-insurance/business-insurance.component';
import {LifeInsuranceComponent} from './insurance/life-insurance/life-insurance.component';
import {HealthInsuranceComponent} from './insurance/health-insurance/health-insurance.component';
import {PensionComponent} from './insurance/pension/pension.component';
import {TravelInsuranceComponent} from './insurance/travel-insurance/travel-insurance.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {PriceOfferCarComponent} from './price-offers/price-offer-car/price-offer-car.component';
import {PriceOfferHouseComponent} from './price-offers/price-offer-house/price-offer-house.component';
import {PriceOfferMortgageComponent} from './price-offers/price-offer-mortgage/price-offer-mortgage.component';
import { ConstructionInsuranceComponent } from './insurance/construction-insurance/construction-insurance.component';
import { MortgageInsuranceComponent } from './insurance/mortgage-insurance/mortgage-insurance.component';


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'insurance', children: [
      {path: 'car', component: CarInsuranceComponent},
      {path: 'house', component: HouseInsuranceComponent},
      {path: 'business', component: BusinessInsuranceComponent},
      {path: 'construction', component: ConstructionInsuranceComponent},
      {path: 'mortgage', component: MortgageInsuranceComponent},
      {path: 'travel', component: TravelInsuranceComponent},
      {path: 'life', component: LifeInsuranceComponent},
      {path: 'health', component: HealthInsuranceComponent},
      {path: 'health', component: HealthInsuranceComponent},
      {path: 'pension-saving', component: PensionComponent},
    ]
  },
  {
    path: 'price-offers', children: [
      {path: 'car', component: PriceOfferCarComponent},
      {path: 'house', component: PriceOfferHouseComponent},
      {path: 'mortgage', component: PriceOfferMortgageComponent},
    ]
  },
  {
    path: 'personal-info', component: PersonalInfoComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
