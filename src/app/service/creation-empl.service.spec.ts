import { TestBed } from '@angular/core/testing';

import { CreationEmplService } from './creation-empl.service';

describe('CreationEmplService', () => {
  let service: CreationEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationEmplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
