import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocheckDemandesComponent } from './tocheck-demandes.component';

describe('TocheckDemandesComponent', () => {
  let component: TocheckDemandesComponent;
  let fixture: ComponentFixture<TocheckDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocheckDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocheckDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
