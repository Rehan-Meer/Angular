import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private taskService = inject(TaskService);
  enteredDate = '';
  enteredSummary = '';
  enteredTitle = '';

  @Input({ required: true }) UserID!: string;
  @Output() onClose = new EventEmitter<void>();

  onCloseClick(): void {
    this.onClose.emit();
  }
  onSubmit(): void {
    this.taskService.addTask({
      id: Math.random().toString(36).slice(2, 7),
      userId: this.UserID,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
    this.onClose.emit();
  }
}
