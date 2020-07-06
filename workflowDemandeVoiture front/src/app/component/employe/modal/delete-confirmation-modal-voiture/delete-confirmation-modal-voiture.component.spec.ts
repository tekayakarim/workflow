import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationModalVoitureComponent } from './delete-confirmation-modal-voiture.component';

describe('DeleteConfirmationModalVoitureComponent', () => {
  let component: DeleteConfirmationModalVoitureComponent;
  let fixture: ComponentFixture<DeleteConfirmationModalVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConfirmationModalVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmationModalVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
