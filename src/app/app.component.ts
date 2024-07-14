import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { SignUp } from '../components/signup/signup.component';
import { UserComponent } from '../components/user/user.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { HeaderComponent } from '../components/header/header.component';
import { Users } from '../app/users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NgFor,
    NgIf,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    SignUp],
})
export class AppComponent 
{
  title = 'Angular';
  users = Users;
  selectedUserID!: string;

  OnUserSelected(id: string){
    this.selectedUserID = id;
  }

  getSelectedUser(){
    return this.users.find((user) => user.Id === this.selectedUserID);
  }
}