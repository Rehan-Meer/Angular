import { Injectable } from '@angular/core';
import type { Task } from '../Models/task.model';
import { HttpClient } from '@angular/common/http';
import { BaseURL, Controller, EndPoint } from '../configurations/apiConfig';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  
  Tasks : Task[] =[]
  
  constructor(private client: HttpClient) {}

  getTasks(userID: number) : Observable<Task[]> {

    const url = `${BaseURL}/${Controller.Main}/${EndPoint.GetTasks}`;
    return this.client.get<Task[]>(url);
  }

  saveTask(task: Task) {
    this.Tasks.push(task);
    this.saveTasks();
  }

  completeTask(taskID: number) {
    this.Tasks = this. Tasks.filter((task) => task.Id !== taskID);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }
}
