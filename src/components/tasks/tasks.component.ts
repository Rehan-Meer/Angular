import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItemsComponent } from "../task-items/task-items.component";
import { NewTaskComponent } from "../new-task/new-task.component";
//import {MyTasks} from '../../app/tasks';


interface MyTasks{

  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,

}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemsComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  //UserTasks = MyTasks;
  @Input({required : true}) UserID !: string;
  @Input({required : true}) Name !: string;
  taskAdded : boolean = false;

   MyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get SelectedUserTasks()
  {
    return this.MyTasks.filter((task)=> task.userId == this.UserID)
  }
  onTaskCompleted(taskID : string)
  {
    this.MyTasks = this.MyTasks.filter((task)=>task.id !== taskID)
  }
  
  onAddTask() {this.taskAdded = true;}
  onCancelTask(){this.taskAdded = false}
  onTaskAdded (newtask : {title: string; summary: string; date: string;}){
    this.MyTasks.push({
       id : '12',
       userId : this.UserID,
       title : newtask.title,
       dueDate: newtask.date,
       summary: newtask.summary
    })
    this.taskAdded =false;
  }
}
