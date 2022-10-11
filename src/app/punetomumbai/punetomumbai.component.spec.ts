import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunetomumbaiComponent } from './punetomumbai.component';

describe('PunetomumbaiComponent', () => {
  let component: PunetomumbaiComponent;
  let fixture: ComponentFixture<PunetomumbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunetomumbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunetomumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
