import { Injectable } from '@angular/core';
import { EmailsService } from '../../shared/emails/emails.service';
import { PriceOffer } from '../models/price-offer.enum';
import { SessionStorageService } from '../../core/services/session-storage.service';
import { FormGroup } from '@angular/forms';

@Injectable()
export class PriceOffersService {
  private formData: any;

  constructor(private emailsService: EmailsService) {
    this.formData = {};
  }

  public static loadFormData(formStorageKey: string, form: FormGroup) {
    const formValue = SessionStorageService.LoadFromSessionStorage(formStorageKey);
    if (formValue) {
      form.setValue(formValue);
    }
  }

  public static buildYearsOptions(): Array<number> {
    const yearOptions: Array<number> = [];
    const currentYear: number = new Date().getFullYear();
    for (let year: number = currentYear; year >= currentYear - 80; year--) {
      yearOptions.push(year);
    }

    return yearOptions;
  }

  addFormData(formData: any) {
    this.formData = {
      ...this.formData,
      ...formData
    };
  }

  sendOfferEmail(offerType: PriceOffer): Promise<boolean> {
    return this.emailsService.sendPriceOfferMail(this.formData, offerType);
  }
}
