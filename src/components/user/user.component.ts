import { Component, Input, Output, EventEmitter } from "@angular/core";
import { type User } from "../../Models/user.model";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({ required: true }) Id !: string;
  // @Input({ required: true }) avatar !: string;
  // name = input.required<String>();
  @Input({required : true}) user !: User;
  @Output() selectedUser = new EventEmitter<number>();
  //selectedUser = output<string>();
  
  get ImagePath(){return 'assets/users/' + this.user.Id +'.jpg';}
  //get ImagePath(){return 'assets/users/';}
  //ImagePath = computed(() => { `assets/users/${this.avatar}`; })

  onSelectUser() {
    this.selectedUser.emit(this.user.Id);
  }
}