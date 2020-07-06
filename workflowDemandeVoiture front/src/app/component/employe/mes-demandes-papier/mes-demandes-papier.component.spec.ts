import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandesPapierComponent } from './mes-demandes-papier.component';

describe('MesDemandesPapierComponent', () => {
  let component: MesDemandesPapierComponent;
  let fixture: ComponentFixture<MesDemandesPapierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDemandesPapierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDemandesPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
