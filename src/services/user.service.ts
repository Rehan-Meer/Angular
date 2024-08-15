import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { BaseURL, Controller, EndPoint } from '../configurations/apiConfig';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [];

  constructor(private client: HttpClient) { }

  BuildClient(controllerName: string, methodName: string): string {
    return `${BaseURL}/${controllerName}/${methodName}`;
  }

  LoadUsers(): Observable<User[]> {
    const url = this.BuildClient(Controller.Main, EndPoint.GetAllUsers);
    return this.client.get<User[]>(url);
  }

  createUser(user: User): Observable<User> {
    const url = this.BuildClient(Controller.Main, EndPoint.CreateUser);
    return this.client.post<User>(url, user);
  }
}
