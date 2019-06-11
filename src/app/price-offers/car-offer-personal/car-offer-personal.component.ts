import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import {PriceOffersService} from '../services/price-offers.service';
import {FormValidationService} from '../../core/services/form-validation.service';
import {FieldData, formFieldsData} from '../../core/config/form-fields.data';

@Component({
  selector: 'oi-car-offer-personal',
  templateUrl: './car-offer-personal.component.html',
  styleUrls: ['./car-offer-personal.component.scss']
})
export class CarOfferPersonalComponent implements OnInit {
  @Output() nextClicked = new EventEmitter<any>();
  public personalInfoForm: FormGroup;
  public maxDate: Date;
  public priceOffersData = formFieldsData;

  constructor(private fb: FormBuilder, private adapter: DateAdapter<any>, private stepper: MatStepper,
              private priceOffersService: PriceOffersService, private formValidationService: FormValidationService) {
    this.initDates();
    this.personalInfoForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      id: ['', [Validators.required, Validators.maxLength(9)]],
      birthday: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', Validators.email],
    });
  }

  ngOnInit() {
  }

  initDates() {
    this.adapter.setLocale('he');
    this.maxDate = new Date(new Date().getFullYear() - 16, 0, 1);
  }

  getErrorMessage(fieldData: FieldData): string {
    return this.formValidationService.getError(this.personalInfoForm.get(fieldData.key), fieldData);
  }

  saveForm() {
    if (this.personalInfoForm.valid) {
      //   console.log('valid!');
      this.nextClicked.emit([this.personalInfoForm.value]);
      this.stepper.next();
    } else {
      // this.personalInfoForm.
      //   console.log('not valid!');
    }
  }
}
