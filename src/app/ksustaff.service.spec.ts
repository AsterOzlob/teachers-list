import { TestBed } from '@angular/core/testing';

import { KSUstaffService } from './ksustaff.service';

describe('KSUstaffService', () => {
  let service: KSUstaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KSUstaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
