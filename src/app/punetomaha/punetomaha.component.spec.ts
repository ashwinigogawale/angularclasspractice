import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunetomahaComponent } from './punetomaha.component';

describe('PunetomahaComponent', () => {
  let component: PunetomahaComponent;
  let fixture: ComponentFixture<PunetomahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunetomahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunetomahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
