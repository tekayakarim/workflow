import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionConfirmationModalVoitureComponent } from './revision-confirmation-modal-voiture.component';

describe('RevisionConfirmationModalVoitureComponent', () => {
  let component: RevisionConfirmationModalVoitureComponent;
  let fixture: ComponentFixture<RevisionConfirmationModalVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionConfirmationModalVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionConfirmationModalVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
