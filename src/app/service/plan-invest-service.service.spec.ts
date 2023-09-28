import { TestBed } from '@angular/core/testing';

import { PlanInvestServiceService } from './plan-invest-service.service';

describe('PlanInvestServiceService', () => {
  let service: PlanInvestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanInvestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
