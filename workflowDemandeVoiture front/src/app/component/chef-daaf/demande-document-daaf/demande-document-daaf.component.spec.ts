import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDocumentDaafComponent } from './demande-document-daaf.component';

describe('DemandeDocumentDaafComponent', () => {
  let component: DemandeDocumentDaafComponent;
  let fixture: ComponentFixture<DemandeDocumentDaafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDocumentDaafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDocumentDaafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
