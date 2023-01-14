import { TestBed } from '@angular/core/testing';

import { CfpService } from './cfp.service';

describe('CfpService', () => {
  let service: CfpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
