import { Component, Input } from '@angular/core';
import { TaskItemsComponent } from '../task-items/task-items.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemsComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) UserID!: string;
  @Input({ required: true }) Name!: string;
  taskAdded: boolean = false;

  constructor(private taskService: TaskService) {}

  get SelectedUserTasks() {
    return this.taskService.getTask(this.UserID);
  }
  onAddTask() {
    this.taskAdded = true;
  }
  onCloseTask() {
    this.taskAdded = false;
  }
}
