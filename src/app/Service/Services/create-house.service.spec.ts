import { TestBed } from '@angular/core/testing';

import { CreateHouseService } from './create-house.service';

describe('CreateHouseService', () => {
  let service: CreateHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
