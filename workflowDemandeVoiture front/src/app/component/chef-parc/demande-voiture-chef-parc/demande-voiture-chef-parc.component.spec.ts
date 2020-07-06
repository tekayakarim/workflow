import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeVoitureChefParcComponent } from './demande-voiture-chef-parc.component';

describe('DemandeVoitureChefParcComponent', () => {
  let component: DemandeVoitureChefParcComponent;
  let fixture: ComponentFixture<DemandeVoitureChefParcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeVoitureChefParcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeVoitureChefParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
