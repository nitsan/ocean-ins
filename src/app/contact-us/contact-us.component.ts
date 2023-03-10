import {Component} from '@angular/core';
import {EmailsService} from '../shared/emails/emails.service';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {FieldData, formFieldsData} from '../core/config/form-fields.data';
import {FormValidationService} from '../core/services/form-validation.service';
import { GtmService } from '../core/services/gtm.service';

@Component({
  selector: 'oi-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public contactUsForm: UntypedFormGroup;
  public isLoading: boolean;
  public showSentMessage: boolean;
  public formFieldsData = formFieldsData;

  constructor(private fb: UntypedFormBuilder, private emailsService: EmailsService, private formValidationService: FormValidationService,
              private gtmService: GtmService) {
    this.isLoading = false;
    this.showSentMessage = false;
    this.contactUsForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.email],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      isCustomer: [false]
    });
  }

  get firstName() {
    return this.contactUsForm.get('firstName');
  }

  get lastName() {
    return this.contactUsForm.get('lastName');
  }

  get email() {
    return this.contactUsForm.get('email');
  }

  get phone() {
    return this.contactUsForm.get('phone');
  }

  get message() {
    return this.contactUsForm.get('message');
  }

  getErrorMessage(fieldData: FieldData): string {
    return this.formValidationService.getError(this.contactUsForm.get(fieldData.key), fieldData);
  }

  onSendClick() {
    this.gtmService.sendEvent('contact-us', 'click-send', this.contactUsForm.valid.toString());
    if (this.contactUsForm.valid) {
      this.isLoading = true;
      return this.emailsService.sendEmail(this.contactUsForm.value, 'ocean-contact-us')
        .then(() => {
          this.isLoading = false;
          this.showSentMessage = true;
        });
    } else {
      Object.keys(this.contactUsForm.controls).forEach(field => {
        const control = this.contactUsForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    }
  }
}
