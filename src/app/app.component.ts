import { Component } from '@angular/core';
import { Users } from '../app/users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'Angular';
  users = Users;
  selectedUserID!: string;
  showSignupComponent = false;

  OnUserSelected(id: string){
    this.selectedUserID = id;
  }

  onShowSignup(){
    this.showSignupComponent = true;
  }

  getSelectedUser(){
    return this.users.find((user) => user.Id === this.selectedUserID);
  }
}