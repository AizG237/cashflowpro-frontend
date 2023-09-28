import { TestBed } from '@angular/core/testing';

import { SessionStockService } from './session-stock.service';

describe('SessionStockService', () => {
  let service: SessionStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
