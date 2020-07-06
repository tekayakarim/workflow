import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeVoitureComponent } from './demande-voiture.component';

describe('DemandeVoitureComponent', () => {
  let component: DemandeVoitureComponent;
  let fixture: ComponentFixture<DemandeVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
