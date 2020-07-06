import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeAgentDaafComponent } from './detail-demande-agent-daaf.component';

describe('DetailDemandeAgentDaafComponent', () => {
  let component: DetailDemandeAgentDaafComponent;
  let fixture: ComponentFixture<DetailDemandeAgentDaafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDemandeAgentDaafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeAgentDaafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
