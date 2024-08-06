import { Component } from '@angular/core';
import type { User } from '../Models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  ActiveUsers: User[] = [];
  selectedUserID!: number;
  showSignupComponent: boolean = false;

  AddUser: User = {
    Id: 0,
    Name: 'Add User',
    Tasks: [],
    Password: 'aa',
    IsActive: true
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.LoadUsers().subscribe(
      (data: User[]) => { this.ActiveUsers = data; },
      error => { console.error('There was an error!', error); }
    );
  }

  OnUserSelected(id: number) {
    this.selectedUserID = id;
  }

  onShowSignup() {
    this.showSignupComponent = true;
  }

  getSelectedUser() {
    return this.ActiveUsers.find((user) => user.Id === +this.selectedUserID);
  }
}