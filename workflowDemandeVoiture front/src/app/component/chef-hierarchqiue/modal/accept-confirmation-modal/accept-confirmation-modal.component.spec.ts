import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptConfirmationModalComponent } from './accept-confirmation-modal.component';

describe('AcceptConfirmationModalComponent', () => {
  let component: AcceptConfirmationModalComponent;
  let fixture: ComponentFixture<AcceptConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
