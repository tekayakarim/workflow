import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedDemandesComponent } from './accepted-demandes.component';

describe('AcceptedDemandesComponent', () => {
  let component: AcceptedDemandesComponent;
  let fixture: ComponentFixture<AcceptedDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
