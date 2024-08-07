import { Injectable } from '@angular/core';
import type { Task } from '../Models/task.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseURL, Controller, EndPoint } from '../configurations/apiConfig';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {

  Tasks: Task[] = [];

  constructor(private client: HttpClient) { }

  BuildClient(controllerName: string, methodName: string): string {
    return `${BaseURL}/${controllerName}/${methodName}`;
  }

  getTasks(_userID: number): Observable<Task[]> {
    const url = this.BuildClient(Controller.Main, EndPoint.GetTasks);
    const params = new HttpParams().set('ID', _userID);
    return this.client.get<Task[]>(url, {params});
  }

  saveTask(task: Task) :Observable<Task> {
    const url = this.BuildClient(Controller.Main, EndPoint.CreateTask);
    const payload = {...task, CreatedDate: this.formatDateString(task.CreatedDate)};
    return this.client.post<Task>(url,payload);
  }

  completeTask(Id: number) : void {
    const url = this.BuildClient(Controller.Main, EndPoint.DeleteTask);
    this.client.post(url, Id);
  }

  private formatDateString(date: Date | null): string {
    if (!date) return '2024-08-05T13:18:24';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    const hours = ('0' + d.getHours()).slice(-2);
    const minutes = ('0' + d.getMinutes()).slice(-2);
    const seconds = ('0' + d.getSeconds()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
}
