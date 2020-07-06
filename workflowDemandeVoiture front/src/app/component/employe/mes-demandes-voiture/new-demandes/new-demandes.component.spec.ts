import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandesComponent } from './new-demandes.component';

describe('NewDemandesComponent', () => {
  let component: NewDemandesComponent;
  let fixture: ComponentFixture<NewDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
