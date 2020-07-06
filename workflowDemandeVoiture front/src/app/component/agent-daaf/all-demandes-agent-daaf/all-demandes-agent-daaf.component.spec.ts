import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDemandesAgentDaafComponent } from './all-demandes-agent-daaf.component';

describe('AllDemandesAgentDaafComponent', () => {
  let component: AllDemandesAgentDaafComponent;
  let fixture: ComponentFixture<AllDemandesAgentDaafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDemandesAgentDaafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDemandesAgentDaafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
