import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {FieldData, formFieldsData} from '../../core/config/form-fields.data';
import {FormValidationService} from '../../core/services/form-validation.service';

@Component({
  selector: 'oi-car-offer-insurance-details',
  templateUrl: './car-offer-insurance-details.component.html',
  styleUrls: ['./car-offer-insurance-details.component.scss']
})
export class CarOfferInsuranceDetailsComponent implements OnInit {
  @Input() isLoading: boolean;
  @Output() nextClicked = new EventEmitter<any>();
  public insuranceInfoForm: FormGroup;
  public priceOffersData = formFieldsData;

  constructor(private fb: FormBuilder, private stepper: MatStepper, private formValidationService: FormValidationService) {
    this.insuranceInfoForm = this.fb.group({
      type: [''],
      youngestDriver: [''],
      youngestDriverExperience: [''],
      numberOfDrivers: [''],
      hasPastClaims: [''],
      claims: [''],
      comment: ['', Validators.maxLength(256)]
    });
  }

  ngOnInit() {
  }


  saveForm() {
    // if (this.personalInfoForm.valid) {
    //   console.log('valid!');
    this.nextClicked.emit([this.insuranceInfoForm.value, true]);
    this.stepper.next();
    // } else {
    //   console.log('not valid!');
    // }
  }

  getErrorMessage(fieldData: FieldData): string {
    return this.formValidationService.getError(this.insuranceInfoForm.get(fieldData.key), fieldData);
  }
}
