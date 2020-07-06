import { TestBed } from '@angular/core/testing';

import { AgentDAAFService } from './agent-daaf.service';

describe('AgentDAAFService', () => {
  let service: AgentDAAFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentDAAFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
