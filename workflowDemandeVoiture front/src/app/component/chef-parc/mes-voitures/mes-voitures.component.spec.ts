import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesVoituresComponent } from './mes-voitures.component';

describe('MesVoituresComponent', () => {
  let component: MesVoituresComponent;
  let fixture: ComponentFixture<MesVoituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesVoituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
