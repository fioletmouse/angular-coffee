import { TestBed } from '@angular/core/testing';

import { BrewTypeService } from './brew-type.service';

describe('BrewTypeService', () => {
  let service: BrewTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
