import { TestBed } from '@angular/core/testing';

import { PrestationserviceService } from './prestationservice.service';

describe('PrestationserviceService', () => {
  let service: PrestationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
