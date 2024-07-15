import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string
}

@Component({
  selector: 'app-task-items',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-items.component.html',
  styleUrl: './task-items.component.css'
})
export class TaskItemsComponent {

   @Input({required : true}) userTask !: Task;

   @Output() clicked = new EventEmitter<string>();

   onClicked(){  
    return this.clicked.emit(this.userTask.id);
   }
}