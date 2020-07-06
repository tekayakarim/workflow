import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendreVoitureConfirmationModalComponent } from './rendre-voiture-confirmation-modal.component';

describe('RendreVoitureConfirmationModalComponent', () => {
  let component: RendreVoitureConfirmationModalComponent;
  let fixture: ComponentFixture<RendreVoitureConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendreVoitureConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendreVoitureConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
