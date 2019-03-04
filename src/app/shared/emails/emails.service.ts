import {Injectable} from '@angular/core';
import {init, send} from 'emailjs-com';
import {formFieldsData} from '../../core/config/form-fields.data';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor() {
    init('user_Ls45FWtcFFvCaTv1CGlPq');
  }

  static buildPriceOfferMail(formData: any): string {
    let emailText = `שלום אושן,<br><br> בקשה להצעת מחיר,<br>פרטים:<br>`;
    const formDataKeys = Object.keys(formData);
    for (const key of formDataKeys) {
      emailText += `<b>${formFieldsData[key].display}:</b> ${formData[key]}<br>`;
    }

    emailText += `<br>תודה<br>האתר שלך`;
    return emailText;
  }

  public sendEmail(form: any, templateId: string): Promise<boolean> {
    return send('sendgrid', templateId, form)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        return true;
      })
      .catch(error => {
        console.warn('FAILED...', error);
        return false;
      });
  }

  sendPriceOfferMail(formData, offerType: string) {
    const email = EmailsService.buildPriceOfferMail(formData);
    const subject = `[הצעת מחיר ל${offerType}] עבור ${formData.firstName} ${formData.lastName}`;
    return this.sendEmail({message_body: email, reply_to: formData.email, subject}, 'general_email');
  }
}
