import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemandeRecuperationComponent } from './modal-demande-recuperation.component';

describe('ModalDemandeRecuperationComponent', () => {
  let component: ModalDemandeRecuperationComponent;
  let fixture: ComponentFixture<ModalDemandeRecuperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemandeRecuperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemandeRecuperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
