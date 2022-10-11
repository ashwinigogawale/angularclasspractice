import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obspro1Component } from './obspro1.component';

describe('Obspro1Component', () => {
  let component: Obspro1Component;
  let fixture: ComponentFixture<Obspro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obspro1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Obspro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
