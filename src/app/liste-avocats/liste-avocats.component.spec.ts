import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAvocatsComponent } from './liste-avocats.component';

describe('ListeAvocatsComponent', () => {
  let component: ListeAvocatsComponent;
  let fixture: ComponentFixture<ListeAvocatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAvocatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAvocatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
