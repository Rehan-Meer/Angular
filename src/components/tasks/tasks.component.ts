import { Component, Input } from '@angular/core';
import { TaskItemsComponent } from "../task-items/task-items.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemsComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required : true}) UserID !: string;
  @Input({required : true}) Name !: string;


}
