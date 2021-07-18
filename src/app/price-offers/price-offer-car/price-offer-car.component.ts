import { Component } from '@angular/core';
import { PriceOffersService } from '../services/price-offers.service';
import { PriceOffer } from '../models/price-offer.enum';
import { SessionStorageService } from '../../core/services/session-storage.service';
import { priceOfferConfig } from '../price-offers.config';
import { environment } from '../../../environments/environment';
import { GtmService } from '../../core/services/gtm.service';

@Component({
  selector: 'oi-price-offer-car',
  templateUrl: './price-offer-car.component.html',
  styleUrls: ['./price-offer-car.component.scss']
})
export class PriceOfferCarComponent {
  public isLoading: boolean;
  public showSuccessMessage: boolean;

  constructor(private priceOffersService: PriceOffersService, private gtmService: GtmService) {
    this.isLoading = false;
    this.showSuccessMessage = false;
  }

  saveForm([formData, formStorageKey, isLast = false]) {
    SessionStorageService.saveToSessionStorage(formStorageKey, formData);
    this.gtmService.sendEvent('price-offer', 'finish-car-step', formStorageKey);
    this.priceOffersService.addFormData(formData);
    if (isLast) {
      this.isLoading = true;
      this.priceOffersService.sendOfferEmail(PriceOffer.CAR)
        .then(() => {
          this.isLoading = false;
          this.showSuccessMessage = true;
          if (environment.production) {
            SessionStorageService.removeKeys(Object.keys(priceOfferConfig.carFormKeys));
          }
        });
    }
  }

}
