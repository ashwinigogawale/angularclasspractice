import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreakComponent } from './treak.component';

describe('TreakComponent', () => {
  let component: TreakComponent;
  let fixture: ComponentFixture<TreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
