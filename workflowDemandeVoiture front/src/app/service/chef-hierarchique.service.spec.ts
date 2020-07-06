import { TestBed } from '@angular/core/testing';

import { ChefHierarchiqueService } from './chef-hierarchique.service';

describe('ChefHierarchiqueService', () => {
  let service: ChefHierarchiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefHierarchiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
