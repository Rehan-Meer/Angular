import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TasksComponent } from "../components/tasks/tasks.component";
import { TaskItemsComponent } from "../components/task-items/task-items.component";
import { NewTaskComponent } from "../components/new-task/new-task.component";
import { SharedModule } from "../sharedmodules/shared.module";
@NgModule({
    declarations :[TasksComponent,TaskItemsComponent,NewTaskComponent],
    exports : [TasksComponent],
    imports : [SharedModule,CommonModule,FormsModule]
})
export  class TaskModule{
}