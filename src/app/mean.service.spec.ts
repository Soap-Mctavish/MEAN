import { TestBed } from '@angular/core/testing';

import { MEANService } from './mean.service';

describe('MEANService', () => {
  let service: MEANService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MEANService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
