import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisAvocatComponent } from './dis-avocat.component';

describe('DisAvocatComponent', () => {
  let component: DisAvocatComponent;
  let fixture: ComponentFixture<DisAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisAvocatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
