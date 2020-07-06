import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  let service;

  beforeEach(() => {
    service = new TokenStorageService();
  });

  it('should run #signOut()', async () => {
    service.signOut();
    expect(window.sessionStorage.clear).toHaveBeenCalled();
  });

  it('should run #saveToken()', async () => {
    service.saveToken({});
    expect(window.sessionStorage.removeItem).toHaveBeenCalled();
    expect(window.sessionStorage.setItem).toHaveBeenCalled();
  });

  it('should run #getToken()', async () => {
    service.getToken();
    expect(service.loggedIn.next).toHaveBeenCalled();
  });

  it('should run #saveUser()', async () => {
    service.saveUser({});
    expect(window.sessionStorage.removeItem).toHaveBeenCalled();
    expect(window.sessionStorage.setItem).toHaveBeenCalled();
  });

  it('should run #getUser()', async () => {

    service.getUser();

  });

});