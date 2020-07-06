import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable()
class MockTokenStorageService { }

describe('AuthInterceptorInterceptor', () => {
  let service;

  beforeEach(() => {
    service = new AuthInterceptorInterceptor(new TokenStorageService());
  });

  it('should run #intercept()', async () => {
    service.intercept({
      clone: function () { },
      headers: {
        set: function () { }
      }
    }, {
      handle: function () { }
    });
    // expect(service.token.getToken).toHaveBeenCalled();
  });

});