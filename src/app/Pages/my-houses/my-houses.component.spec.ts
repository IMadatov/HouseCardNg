import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHousesComponent } from './my-houses.component';

describe('MyHousesComponent', () => {
  let component: MyHousesComponent;
  let fixture: ComponentFixture<MyHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
