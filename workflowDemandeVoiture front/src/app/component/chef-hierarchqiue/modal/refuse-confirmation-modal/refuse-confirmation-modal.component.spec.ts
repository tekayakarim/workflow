import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseConfirmationModalComponent } from './refuse-confirmation-modal.component';

describe('RefuseConfirmationModalComponent', () => {
  let component: RefuseConfirmationModalComponent;
  let fixture: ComponentFixture<RefuseConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
