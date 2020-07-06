import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseDemandeVoitureComponent } from './refuse-demande-voiture.component';

describe('RefuseDemandeVoitureComponent', () => {
  let component: RefuseDemandeVoitureComponent;
  let fixture: ComponentFixture<RefuseDemandeVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseDemandeVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseDemandeVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
