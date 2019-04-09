import * as Sentry from '@sentry/browser';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

Sentry.init({
  dsn: 'https://4ab84de812f34ffeb71ee7c3bcdc6e23@sentry.io/1435162'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
  }

  handleError(error) {
    if (environment.production) {
      Sentry.captureException(error.originalError || error);
    } else {
      console.error(error);
    }
  }
}
