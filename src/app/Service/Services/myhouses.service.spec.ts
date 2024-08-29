import { TestBed } from '@angular/core/testing';

import { MyhousesService } from './myhouses.service';

describe('MyhousesService', () => {
  let service: MyhousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
