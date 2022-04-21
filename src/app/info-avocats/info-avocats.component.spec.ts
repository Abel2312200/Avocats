import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAvocatsComponent } from './info-avocats.component';

describe('InfoAvocatsComponent', () => {
  let component: InfoAvocatsComponent;
  let fixture: ComponentFixture<InfoAvocatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAvocatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAvocatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
