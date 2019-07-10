import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesNowComponent } from './buses-now.component';

describe('BusesNowComponent', () => {
  let component: BusesNowComponent;
  let fixture: ComponentFixture<BusesNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusesNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
