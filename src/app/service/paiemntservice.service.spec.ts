import { TestBed } from '@angular/core/testing';

import { PaiemntserviceService } from './paiemntservice.service';

describe('PaiemntserviceService', () => {
  let service: PaiemntserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiemntserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
