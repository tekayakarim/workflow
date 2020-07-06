import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptConfirmationModalVoitureComponent } from './accept-confirmation-modal-voiture.component';

describe('AcceptConfirmationModalVoitureComponent', () => {
  let component: AcceptConfirmationModalVoitureComponent;
  let fixture: ComponentFixture<AcceptConfirmationModalVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptConfirmationModalVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptConfirmationModalVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
