import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskStatus } from '../../Models/taskStatus.enum';
import { Task } from '../../Models/task.model';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private taskService = inject(TaskService);
  enteredDate = new Date();
  enteredSummary = '';
  enteredTitle = '';

  @Input({ required: true }) UserID!: number;
  @Output() onClose = new EventEmitter<void>();

  onCloseClick(): void {
    this.onClose.emit();
  }
  onSubmit(event : Event): void {
     
    event?.preventDefault()
    const task: Task = {
      Id: 0,
      userId: this.UserID,
      Description: this.enteredTitle,
      CreatedDate: this.enteredDate, 
      UpdatedDate: null, 
      CompletedDate: null,
      Status: TaskStatus.Archieved
    };
 
    this.taskService.saveTask(task).subscribe(response => {
      console.log('Task saved:', response);
      this.onClose.emit();
    });
  }
}
