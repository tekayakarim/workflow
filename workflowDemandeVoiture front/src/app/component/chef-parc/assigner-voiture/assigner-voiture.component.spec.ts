import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignerVoitureComponent } from './assigner-voiture.component';

describe('AssignerVoitureComponent', () => {
  let component: AssignerVoitureComponent;
  let fixture: ComponentFixture<AssignerVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignerVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignerVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
