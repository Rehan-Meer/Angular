import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskStatus } from '../../Models/taskStatus.enum';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private taskService = inject(TaskService);
  enteredDate = '';
  enteredSummary = '';
  enteredTitle = '';

  @Input({ required: true }) UserID!: number;
  @Output() onClose = new EventEmitter<void>();

  onCloseClick(): void {
    this.onClose.emit();
  }
  onSubmit(): void {
    this.taskService.saveTask({
      Id: +Math.random().toString(36).slice(2, 7),
      userId: +this.UserID,
      Description: this.enteredTitle,
      CreatedDate : new Date(),
      UpdatedDate : new Date(),
      CompletedDate : new Date(),
      Status : TaskStatus.Archieved


    });
    this.onClose.emit();
  }
}
