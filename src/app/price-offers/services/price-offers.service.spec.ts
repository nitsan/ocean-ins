import { TestBed } from '@angular/core/testing';

import { PriceOffersService } from './price-offers.service';
import {EmailsService} from '../../shared/emails/emails.service';

describe('PriceOffersService', () => {
  let service: PriceOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PriceOffersService,
        {
          provide: EmailsService,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(PriceOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
