import {Injectable} from '@angular/core';
import {init, send} from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor() {
    init('user_Ls45FWtcFFvCaTv1CGlPq');
  }

  public sendEmail(form): Promise<boolean> {
    return send('sendgrid', 'ocean-contact-us', form)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        return true;
      })
      .catch(error => {
        console.warn('FAILED...', error);
        return false;
      });
  }
}
