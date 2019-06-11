import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {carTypes} from './cars-types.data';
import {Observable} from 'rxjs/internal/Observable';
import {map, startWith} from 'rxjs/operators';
import { MatStepper } from '@angular/material/stepper';
import {FormValidationService} from '../../core/services/form-validation.service';
import {FieldData, formFieldsData} from '../../core/config/form-fields.data';

@Component({
  selector: 'oi-car-offer-car-details',
  templateUrl: './car-offer-car-details.component.html',
  styleUrls: ['./car-offer-car-details.component.scss']
})
export class CarOfferCarDetailsComponent implements OnInit {
  @Output() nextClicked = new EventEmitter<any>();
  public carInfoForm: FormGroup;
  public carTypes;
  public filteredOptions: Observable<any[]>;
  public priceOffersData = formFieldsData;

  constructor(private fb: FormBuilder, private stepper: MatStepper, private formValidationService: FormValidationService) {
    this.carTypes = carTypes;
    this.carInfoForm = this.fb.group({
      licenceIssuing: ['', [Validators.required]],
      licenseNumber: [''],
      manufacturer: [''],
      model: [''],
      manufactureYear: [''],
      engineCapacity: ['']
    });
  }

  ngOnInit() {
    this.filteredOptions = this.carInfoForm.get('manufacturer').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.carTypes.filter(car => car.type.includes(filterValue));
  }

  getErrorMessage(fieldData: FieldData): string {
    return this.formValidationService.getError(this.carInfoForm.get(fieldData.key), fieldData);
  }

  saveForm() {
    // if (this.personalInfoForm.valid) {
    //   console.log('valid!');
    this.nextClicked.emit([this.carInfoForm.value]);
    this.stepper.next();
    // } else {
    //   console.log('not valid!');
    // }
  }
}
