import { TestBed } from '@angular/core/testing';

import { TabNotificationService } from './tab-notification.service';

describe('TabNotificationService', () => {
  let service: TabNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
