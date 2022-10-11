import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsthvinayakComponent } from './asthvinayak.component';

describe('AsthvinayakComponent', () => {
  let component: AsthvinayakComponent;
  let fixture: ComponentFixture<AsthvinayakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsthvinayakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsthvinayakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
