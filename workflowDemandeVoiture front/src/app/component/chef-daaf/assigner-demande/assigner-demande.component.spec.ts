import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignerDemandeComponent } from './assigner-demande.component';

describe('AssignerDemandeComponent', () => {
  let component: AssignerDemandeComponent;
  let fixture: ComponentFixture<AssignerDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignerDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignerDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
