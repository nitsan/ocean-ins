import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { HouseInsuranceComponent } from './house-insurance/house-insurance.component';
import { BusinessInsuranceComponent } from './business-insurance/business-insurance.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { TravelInsuranceComponent } from './travel-insurance/travel-insurance.component';
import { PensionComponent } from './pension/pension.component';
import { ConstructionInsuranceComponent } from './construction-insurance/construction-insurance.component';
import { MortgageInsuranceComponent } from './mortgage-insurance/mortgage-insurance.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InsuranceComponent,
    CarInsuranceComponent,
    HouseInsuranceComponent,
    BusinessInsuranceComponent,
    LifeInsuranceComponent,
    HealthInsuranceComponent,
    TravelInsuranceComponent,
    PensionComponent,
    ConstructionInsuranceComponent,
    MortgageInsuranceComponent]
})
export class InsuranceModule {
}
