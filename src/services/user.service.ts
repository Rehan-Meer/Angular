import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../Models/user.model';
import { BaseURL, Controller, EndPoint } from '../configurations/apiConfig';
import {Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [];

  constructor(private client: HttpClient) {}

  LoadUsers(): Observable<User[]> {
    const url = `${BaseURL}/${Controller.Main}/${EndPoint.GetAllUsers}`;
    return this.client.get<User[]>(url);
  }
}
