import { TestBed } from '@angular/core/testing';

import { SalaireserviceService } from './salaireservice.service';

describe('SalaireserviceService', () => {
  let service: SalaireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
