import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandesVoitureComponent } from './mes-demandes-voiture.component';

describe('MesDemandesVoitureComponent', () => {
  let component: MesDemandesVoitureComponent;
  let fixture: ComponentFixture<MesDemandesVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDemandesVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDemandesVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
