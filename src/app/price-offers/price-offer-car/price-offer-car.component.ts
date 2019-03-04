import {Component, OnInit} from '@angular/core';
import {PriceOffersService} from '../services/price-offers.service';
import {PriceOffer} from '../models/price-offer.enum';

@Component({
  selector: 'oi-price-offer-car',
  templateUrl: './price-offer-car.component.html',
  styleUrls: ['./price-offer-car.component.scss']
})
export class PriceOfferCarComponent implements OnInit {
  public isLoading: boolean;
  public showSuccessMessage: boolean;

  constructor(private priceOffersService: PriceOffersService) {
    this.isLoading = false;
    this.showSuccessMessage = false;
  }

  ngOnInit() {
  }

  saveForm([formData, isLast = false]) {
    this.priceOffersService.addFormData(formData);
    console.log('isLast: ', isLast);
    if (isLast) {
      this.isLoading = true;
      this.priceOffersService.sendOfferEmail(PriceOffer.CAR)
        .then(() => {
          this.isLoading = false;
          this.showSuccessMessage = true;
        });
    }
  }

}
