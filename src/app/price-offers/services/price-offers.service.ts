import {Injectable} from '@angular/core';
import {EmailsService} from '../../shared/emails/emails.service';
import {PriceOffer} from '../models/price-offer.enum';

@Injectable()
export class PriceOffersService {
  private formData: any;

  constructor(private emailsService: EmailsService) {
    this.formData = {};
  }

  addFormData(formData: any) {
    console.log('formData: ', formData);
    this.formData = {
      ...this.formData,
      ...formData
    };
    console.log('new formData: ', this.formData);
  }

  sendOfferEmail(offerType: PriceOffer ) {
    return this.emailsService.sendPriceOfferMail(this.formData, offerType);
  }
}
