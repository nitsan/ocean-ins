import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import { PriceOffersService } from '../services/price-offers.service';
import { FormValidationService } from '../../core/services/form-validation.service';
import { FieldData, formFieldsData } from '../../core/config/form-fields.data';
import { priceOfferConfig } from '../price-offers.config';

@Component({
  selector: 'oi-car-offer-personal',
  templateUrl: './car-offer-personal.component.html',
  styleUrls: ['./car-offer-personal.component.scss']
})
export class CarOfferPersonalComponent implements OnInit {
  @Output() nextClicked = new EventEmitter<any>();
  private readonly formStorageKey = priceOfferConfig.carFormKeys.personalInfoForm;
  public personalInfoForm: UntypedFormGroup;
  public minDate: Date;
  public maxDate: Date;
  public priceOffersData = formFieldsData;

  constructor(private fb: UntypedFormBuilder, private adapter: DateAdapter<any>, private stepper: MatStepper,
              private priceOffersService: PriceOffersService, private formValidationService: FormValidationService) {
    this.initDates();
    this.personalInfoForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      id: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(9)]],
      birthday: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    PriceOffersService.loadFormData(this.formStorageKey, this.personalInfoForm);
  }

  initDates() {
    this.adapter.setLocale('he');
    this.minDate = new Date(new Date().getFullYear() - 99, 0, 1);
    this.maxDate = new Date(new Date().getFullYear() - 16, 0, 1);
  }

  getErrorMessage(fieldData: FieldData): string {
    return this.formValidationService.getError(this.personalInfoForm.get(fieldData.key), fieldData);
  }

  saveForm() {
    if (this.personalInfoForm.valid) {
      this.nextClicked.emit([this.personalInfoForm.value, this.formStorageKey]);
      this.stepper.next();
    }
  }
}
