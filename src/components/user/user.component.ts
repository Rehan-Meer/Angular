import { Component} from "@angular/core";
import { Users } from "../../app/users";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
  })
export class UserComponent
{
 usersList= Users;
 showMenu = false;

  editUser(user: any) {
    console.log('Edit user:', user);
    // Add your edit logic here
  }

  deleteUser(user: any) {
    console.log('Delete user:', user);
    // Add your delete logic here
  }

}