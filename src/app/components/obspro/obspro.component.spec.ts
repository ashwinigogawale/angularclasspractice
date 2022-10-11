import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsproComponent } from './obspro.component';

describe('ObsproComponent', () => {
  let component: ObsproComponent;
  let fixture: ComponentFixture<ObsproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
