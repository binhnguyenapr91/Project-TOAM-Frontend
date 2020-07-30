import { TestBed } from '@angular/core/testing';

import { PropertyStatusService } from './property-status.service';

describe('PropertyStatusService', () => {
  let service: PropertyStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
