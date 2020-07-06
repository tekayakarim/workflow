import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesVoitureChefHierarchiqueComponent } from './demandes-voiture-chef-hierarchique.component';

describe('DemandesVoitureChefHierarchiqueComponent', () => {
  let component: DemandesVoitureChefHierarchiqueComponent;
  let fixture: ComponentFixture<DemandesVoitureChefHierarchiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesVoitureChefHierarchiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesVoitureChefHierarchiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
