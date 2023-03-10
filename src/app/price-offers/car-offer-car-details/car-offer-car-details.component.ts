import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { carTypes } from './cars-types.data';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { MatStepper } from '@angular/material/stepper';
import { FormValidationService } from '../../core/services/form-validation.service';
import { FieldData, formFieldsData } from '../../core/config/form-fields.data';
import { PriceOffersService } from '../services/price-offers.service';
import { priceOfferConfig } from '../price-offers.config';

@Component({
  selector: 'oi-car-offer-car-details',
  templateUrl: './car-offer-car-details.component.html',
  styleUrls: ['./car-offer-car-details.component.scss']
})
export class CarOfferCarDetailsComponent implements OnInit {
  @Output() nextClicked = new EventEmitter<any>();
  private readonly formStorageKey = priceOfferConfig.carFormKeys.carInfoForm;
  public carInfoForm: UntypedFormGroup;
  public carTypes: Array<{ type: string }>;
  public filteredOptions: Observable<any[]>;
  public priceOffersData = formFieldsData;
  public yearOptions: Array<number>;

  constructor(private fb: UntypedFormBuilder, private stepper: MatStepper, private formValidationService: FormValidationService) {
    this.yearOptions = PriceOffersService.buildYearsOptions();
    this.carTypes = carTypes;
    this.carInfoForm = this.fb.group({
      licenceIssuing: ['', Validators.required],
      licenseNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      manufactureYear: ['', Validators.required],
      engineCapacity: ['', [Validators.required, Validators.min(1), Validators.max(10000)]]
    });
  }

  ngOnInit() {
    PriceOffersService.loadFormData(this.formStorageKey, this.carInfoForm);
    this.filteredOptions = this.carInfoForm.get('manufacturer').valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterManufacturer(value))
      );
  }

  private filterManufacturer(value: string): Array<{ type: string }> {
    const filterValue = value.toLowerCase();

    return this.carTypes.filter(car => car.type.includes(filterValue));
  }

  getErrorMessage(fieldData: FieldData): string {
    return this.formValidationService.getError(this.carInfoForm.get(fieldData.key), fieldData);
  }

  saveForm() {
    if (this.carInfoForm.valid) {
      this.nextClicked.emit([this.carInfoForm.value, this.formStorageKey]);
      this.stepper.next();
    }
  }
}
