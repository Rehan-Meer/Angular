import { Component } from "@angular/core";
import { Users } from "../../app/users";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
  })
export class UserComponent
{
  selectedUser = Users[1];


}