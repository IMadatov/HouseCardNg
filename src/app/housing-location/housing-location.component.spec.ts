import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseingLocationComponent as HousingLocationComponent } from './housing-location.component';

describe('HouseingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
