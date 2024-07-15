import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredDate = '';
  enteredSummary = '';
  enteredTitle = '';
  @Output() CancelPressed = new EventEmitter<void>();
  @Output() AddTask = new EventEmitter<{
    title: string;
    summary: string;
    date: string;
  }>();
  onCancelClick() {
    this.CancelPressed.emit();
  }
  onSubmit() {
    this.AddTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
