import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNotificationListComponent } from './tab-notification-list.component';

describe('TabNotificationListComponent', () => {
  let component: TabNotificationListComponent;
  let fixture: ComponentFixture<TabNotificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNotificationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabNotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
