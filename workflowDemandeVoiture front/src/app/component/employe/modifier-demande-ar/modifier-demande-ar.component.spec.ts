import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDemandeArComponent } from './modifier-demande-ar.component';

describe('ModifierDemandeArComponent', () => {
  let component: ModifierDemandeArComponent;
  let fixture: ComponentFixture<ModifierDemandeArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierDemandeArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDemandeArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
