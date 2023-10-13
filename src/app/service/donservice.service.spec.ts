import { TestBed } from '@angular/core/testing';

import { DonserviceService } from './donservice.service';

describe('DonserviceService', () => {
  let service: DonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
