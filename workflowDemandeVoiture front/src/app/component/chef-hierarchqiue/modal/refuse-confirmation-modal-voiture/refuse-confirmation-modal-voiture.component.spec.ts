import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseConfirmationModalVoitureComponent } from './refuse-confirmation-modal-voiture.component';

describe('RefuseConfirmationModalVoitureComponent', () => {
  let component: RefuseConfirmationModalVoitureComponent;
  let fixture: ComponentFixture<RefuseConfirmationModalVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseConfirmationModalVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseConfirmationModalVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
