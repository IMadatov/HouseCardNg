import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTelegramWidgetComponent } from './by-telegram-widget.component';

describe('ByTelegramWidgetComponent', () => {
  let component: ByTelegramWidgetComponent;
  let fixture: ComponentFixture<ByTelegramWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByTelegramWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByTelegramWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
