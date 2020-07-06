import { async, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { DemandeDocumentService } from './demande-document.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
class MockHttpClient {
  post() {};
}

describe('DemandeDocumentService', () => {
  let service;

  beforeEach(() => {

    service = TestBed.createComponent(DemandeDocumentService);
  });

  it('should run #add()', async () => {
    service.add({});
    expect(service.documents.push).toHaveBeenCalled();
  });

  it('should run #createDemande()', async () => {
    service.createDemande({});
    expect(service.httpClient.post).toHaveBeenCalled();
  });

  it('should run #getDemandeByCurrentUser()', async () => {
    service.getDemandeByCurrentUser({});
    expect(service.httpClient.get).toHaveBeenCalled();
  });

});