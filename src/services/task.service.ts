import { Injectable } from '@angular/core';
import type { Task } from '../Models/task.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseURL, Controller, EndPoint } from '../configurations/apiConfig';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  Tasks: Task[] = [];

  constructor(private client: HttpClient) {}

  BuildClient(controller: string, method: string): string {
    return `${BaseURL}/${controller}/${method}`;
  }

  getTasks(userID: number): Observable<Task[]> {
    const url = this.BuildClient(Controller.Main, EndPoint.GetTasks);
    let params = new HttpParams().set('ID', userID);
    return this.client.get<Task[]>(url, { params });
  }

  saveTask(task: Task) {
    const url = this.BuildClient(Controller.Main, EndPoint.CreateTask)
    return this.client.post(url,task);
  }

  completeTask(taskID: number) {
    this.Tasks = this.Tasks.filter((task) => task.Id !== taskID);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }
}
