import { TestBed } from '@angular/core/testing';

import { MycardlistService } from './mycardlist.service';

describe('MycardlistService', () => {
  let service: MycardlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycardlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
