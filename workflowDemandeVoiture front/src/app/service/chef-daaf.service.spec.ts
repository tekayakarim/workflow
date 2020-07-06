import { TestBed } from '@angular/core/testing';

import { ChefDAAFService } from './chef-daaf.service';

describe('ChefDAAFService', () => {
  let service: ChefDAAFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefDAAFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
