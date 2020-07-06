import { async, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
class MockHttpClient {
  post() {};
}

describe('UserService', () => {
  let service;

  beforeEach(() => {
    service = TestBed.createComponent(UserService);
  });

  it('should run #getUser()', async () => {
    service.getUser({});
    expect(service.httpClient.get).toHaveBeenCalled();
  });

});