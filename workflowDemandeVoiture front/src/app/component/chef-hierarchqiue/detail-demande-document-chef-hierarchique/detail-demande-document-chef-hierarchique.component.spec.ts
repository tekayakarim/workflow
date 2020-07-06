import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeDocumentChefHierarchiqueComponent } from './detail-demande-document-chef-hierarchique.component';

describe('DetailDemandeDocumentChefHierarchiqueComponent', () => {
  let component: DetailDemandeDocumentChefHierarchiqueComponent;
  let fixture: ComponentFixture<DetailDemandeDocumentChefHierarchiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDemandeDocumentChefHierarchiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeDocumentChefHierarchiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
