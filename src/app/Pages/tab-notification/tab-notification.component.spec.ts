import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNotificationComponent } from './tab-notification.component';

describe('TabNotificationComponent', () => {
  let component: TabNotificationComponent;
  let fixture: ComponentFixture<TabNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
