import { TestBed } from '@angular/core/testing';

import { PriceOffersService } from './price-offers.service';

describe('PriceOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceOffersService = TestBed.get(PriceOffersService);
    expect(service).toBeTruthy();
  });
});
