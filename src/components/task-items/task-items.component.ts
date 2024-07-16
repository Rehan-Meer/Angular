import { Component, Input, inject } from '@angular/core';
import { type Task } from '../../Models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-items',
  standalone: false,
  templateUrl: './task-items.component.html',
  styleUrl: './task-items.component.css',
})
export class TaskItemsComponent {
  private taskService = inject(TaskService);
  @Input({ required: true }) userTask!: Task;

  onCompleteClick(): void {
    this.taskService.completeTask(this.userTask.id);
  }
}
