import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeVoitureChefHierarchiqueComponent } from './detail-demande-voiture-chef-hierarchique.component';

describe('DetailDemandeVoitureChefHierarchiqueComponent', () => {
  let component: DetailDemandeVoitureChefHierarchiqueComponent;
  let fixture: ComponentFixture<DetailDemandeVoitureChefHierarchiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDemandeVoitureChefHierarchiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeVoitureChefHierarchiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
