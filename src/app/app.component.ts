import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from "../components/user/user.component";
import { SignUp } from "../components/signup/signup.component";
import { Users } from "../app/users";
import { TasksComponent } from '../components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, SignUp, CommonModule]
})
export class AppComponent 
{
  title = 'Angular';
  users = Users;
  selectedUserID!: string

  OnUserSelected(id: string) 
  {
    this.selectedUserID = id;
  }

  getSelectedUser() 
  {
    return this.users.find((user) =>  user.id === this.selectedUserID)
  }
}