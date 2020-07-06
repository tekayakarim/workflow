import { TestBed } from '@angular/core/testing';

import { ChefParkService } from './chef-park.service';

describe('ChefParkService', () => {
  let service: ChefParkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefParkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
