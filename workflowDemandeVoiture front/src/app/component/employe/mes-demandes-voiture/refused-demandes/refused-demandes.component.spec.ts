import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefusedDemandesComponent } from './refused-demandes.component';

describe('RefusedDemandesComponent', () => {
  let component: RefusedDemandesComponent;
  let fixture: ComponentFixture<RefusedDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefusedDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefusedDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
