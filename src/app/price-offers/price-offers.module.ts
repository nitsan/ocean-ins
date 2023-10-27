import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceOfferCarComponent} from './price-offer-car/price-offer-car.component';
import {PriceOfferHouseComponent} from './price-offer-house/price-offer-house.component';
import {PriceOfferMortgageComponent} from './price-offer-mortgage/price-offer-mortgage.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatStepperModule } from '@angular/material/stepper';
import {CarOfferPersonalComponent} from './car-offer-personal/car-offer-personal.component';
import {CarOfferCarDetailsComponent} from './car-offer-car-details/car-offer-car-details.component';
import {CarOfferInsuranceDetailsComponent} from './car-offer-insurance-details/car-offer-insurance-details.component';
import {PriceOffersService} from './services/price-offers.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  declarations: [
    PriceOfferCarComponent,
    PriceOfferHouseComponent,
    PriceOfferMortgageComponent,
    CarOfferPersonalComponent,
    CarOfferCarDetailsComponent,
    CarOfferInsuranceDetailsComponent
  ],
  providers: [
    PriceOffersService
  ]
})
export class PriceOffersModule {
}
