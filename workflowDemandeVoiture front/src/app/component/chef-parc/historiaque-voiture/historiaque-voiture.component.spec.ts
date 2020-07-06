import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaqueVoitureComponent } from './historiaque-voiture.component';

describe('HistoriaqueVoitureComponent', () => {
  let component: HistoriaqueVoitureComponent;
  let fixture: ComponentFixture<HistoriaqueVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaqueVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaqueVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
