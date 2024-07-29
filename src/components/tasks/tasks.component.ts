import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) UserID!: number;
  @Input({ required: true }) Name!: string;
  taskAdded: boolean = false;
  selectedUserTasks ?: Task[];

  constructor(private taskService: TaskService) {}

  async SelectedUserTasks(): Promise<Task[]> {
    try
    {
      const tasks = await this.taskService.getTasks(this.UserID).toPromise();
      this.selectedUserTasks = tasks;
      return this.selectedUserTasks!;
    } 
    catch (error) 
    {
      console.error('There was an error!', error);
      throw error;  
    }
  }
  
  onAddTask() {
    this.taskAdded = true;
  }
  onCloseTask() {
    this.taskAdded = false;
  }
}
