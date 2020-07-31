import { TestBed } from '@angular/core/testing';

import { HostIncomeService } from './host-income.service';

describe('HostIncomeService', () => {
  let service: HostIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
