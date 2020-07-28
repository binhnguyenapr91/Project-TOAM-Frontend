import { TestBed } from '@angular/core/testing';

import { PropertiesTypeService } from './propeties-type.service';

describe('PropetiesTypeService', () => {
  let service: PropertiesTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
