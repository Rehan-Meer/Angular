import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../Models/user.model';
import { BASE_URL, Controller, EndPoint } from '../configurations/apiConfig';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [];

  constructor(private client: HttpClient) {}

  LoadUsers(): Observable<User[]> {
    const url = `${BASE_URL}/${Controller.Main}/${EndPoint.GET_ALLUSER}`;
    return this.client.get<User[]>(url);
  }
}
