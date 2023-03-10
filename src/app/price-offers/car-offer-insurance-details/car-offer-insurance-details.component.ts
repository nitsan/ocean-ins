import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { FieldData, formFieldsData } from '../../core/config/form-fields.data';
import { FormValidationService } from '../../core/services/form-validation.service';
import { PriceOffersService } from '../services/price-offers.service';
import { priceOfferConfig } from '../price-offers.config';

@Component({
  selector: 'oi-car-offer-insurance-details',
  templateUrl: './car-offer-insurance-details.component.html',
  styleUrls: ['./car-offer-insurance-details.component.scss']
})
export class CarOfferInsuranceDetailsComponent implements OnInit {
  @Input() isLoading: boolean;
  @Output() nextClicked = new EventEmitter<any>();
  private readonly formStorageKey = priceOfferConfig.carFormKeys.insuranceInfoForm;
  public insuranceInfoForm: UntypedFormGroup;
  public priceOffersData = formFieldsData;

  get hasPastClaims(): AbstractControl {
    return this.insuranceInfoForm.get('hasPastClaims');
  }

  constructor(private fb: UntypedFormBuilder, private stepper: MatStepper, private formValidationService: FormValidationService) {
    this.insuranceInfoForm = this.fb.group({
      type: ['', Validators.required],
      youngestDriver: ['', Validators.required],
      youngestDriverExperience: ['', Validators.required],
      numberOfDrivers: ['', Validators.required],
      hasPastClaims: ['', Validators.required],
      comment: ['', [Validators.minLength(2), Validators.maxLength(256)]]
    });
  }

  ngOnInit() {
    this.insuranceInfoForm.enable();
    PriceOffersService.loadFormData(this.formStorageKey, this.insuranceInfoForm);
  }

  saveForm() {
    if (this.insuranceInfoForm.valid) {
      this.nextClicked.emit([this.insuranceInfoForm.value, this.formStorageKey, true]);
      this.stepper.next();
      this.insuranceInfoForm.disable();
    }
  }

  getErrorMessage(fieldData: FieldData): string {
    return this.formValidationService.getError(this.insuranceInfoForm.get(fieldData.key), fieldData);
  }
}
