import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendreVoitureComponent } from './rendre-voiture.component';

describe('RendreVoitureComponent', () => {
  let component: RendreVoitureComponent;
  let fixture: ComponentFixture<RendreVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendreVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendreVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
