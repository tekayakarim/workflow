import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:9000' + '/main/user';
  constructor(private httpClient: HttpClient) { }

  public  getUser(username:String):Observable<User>{
     return this.httpClient.get<User>(this.url+'/getCurrentUserEmploye?userName='+username);
  }
  /**
   * getAllUsers
   */
  public getAllUsers() :Observable<User>{
     return this.httpClient.get<User>(this.url+'/getAllUsers');
  }
  /**
   * deleteUser
   */
  public deleteUser(id: number) {
     return this.httpClient.delete(this.url+'/deleteUser?id='+id);
  }
}
