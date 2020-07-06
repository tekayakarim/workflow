import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesPapierChefHierarchiqueComponent } from './demandes-papier-chef-hierarchique.component';

describe('DemandesPapierChefHierarchiqueComponent', () => {
  let component: DemandesPapierChefHierarchiqueComponent;
  let fixture: ComponentFixture<DemandesPapierChefHierarchiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesPapierChefHierarchiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesPapierChefHierarchiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
