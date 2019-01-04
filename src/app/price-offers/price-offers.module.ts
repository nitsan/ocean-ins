import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceOfferCarComponent} from './price-offer-car/price-offer-car.component';
import {PriceOfferHouseComponent} from './price-offer-house/price-offer-house.component';
import {PriceOfferMortgageComponent} from './price-offer-mortgage/price-offer-mortgage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PriceOfferCarComponent, PriceOfferHouseComponent, PriceOfferMortgageComponent]
})
export class PriceOffersModule {
}
