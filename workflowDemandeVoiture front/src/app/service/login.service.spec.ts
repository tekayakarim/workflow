import { async, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
class MockHttpClient {
  post() {};
}

describe('LoginService', () => {
  let service;

  beforeEach(() => {
    service = TestBed.createComponent(LoginService);
  });

  it('should run #login()', async () => {
   
    service.login({
      username: {},
      password: {}
    });
    expect(service.loggedIn.next).toHaveBeenCalled();
    expect(service.httpClient.post).toHaveBeenCalled();
  });

});