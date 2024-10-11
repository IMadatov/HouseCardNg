import { TestBed } from '@angular/core/testing';

import { MycardsService } from './mycards.service';

describe('MycardsService', () => {
  let service: MycardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
