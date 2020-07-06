import { TestBed } from '@angular/core/testing';

import { DemandeVoitureService } from './demande-voiture.service';

describe('DemandeVoitureService', () => {
  let service: DemandeVoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeVoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
