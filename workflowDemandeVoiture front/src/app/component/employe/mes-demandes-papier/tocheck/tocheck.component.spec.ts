import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocheckComponent } from './tocheck.component';

describe('TocheckComponent', () => {
  let component: TocheckComponent;
  let fixture: ComponentFixture<TocheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
