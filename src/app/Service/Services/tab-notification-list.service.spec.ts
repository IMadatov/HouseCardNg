import { TestBed } from '@angular/core/testing';

import { TabNotificationListService } from './tab-notification-list.service';

describe('TabNotificationListService', () => {
  let service: TabNotificationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabNotificationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
