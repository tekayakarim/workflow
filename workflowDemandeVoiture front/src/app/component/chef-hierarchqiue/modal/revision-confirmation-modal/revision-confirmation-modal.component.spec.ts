import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionConfirmationModalComponent } from './revision-confirmation-modal.component';

describe('RevisionConfirmationModalComponent', () => {
  let component: RevisionConfirmationModalComponent;
  let fixture: ComponentFixture<RevisionConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
