import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {FieldData} from '../config/form-fields.data';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  private readonly errors: any;

  constructor() {
    this.errors = {
      required: 'שדה חובה',
      minlength: 'התוכן קצר מידי',
      maxlength: 'התוכן ארוך מידי',
      min: 'הערך נמוך מידי',
      max: 'הערך גבוה מידי',
      email: 'יש להכניס מייל חוקי'
    };
  }

  getError(formGroup: AbstractControl, fieldData: FieldData) {
    let errorMessage = '';
    for (const errorType of Object.keys(this.errors)) {
      if (formGroup.hasError(errorType)) {
        errorMessage = fieldData[errorType] || this.errors[errorType];
        break;
      }
    }

    return errorMessage;
  }
}
