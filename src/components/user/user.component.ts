import { Component, Input, signal, input, computed, Output, EventEmitter, output } from "@angular/core";
import { CommonModule } from '@angular/common';

type UserObject ={
 Id : string,
 Name : string,
 Avatar : string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  // @Input({ required: true }) Id !: string;
  // @Input({ required: true }) avatar !: string;
  // name = input.required<String>();

  @Input({required : true}) user !: UserObject;

  @Output() selectedUser = new EventEmitter<string>();
  //selectedUser = output<string>();


  get ImagePath(){return 'assets/users/' + this.user.Avatar;}
  //ImagePath = computed(() => { `assets/users/${this.avatar}`; })

  onSelectUser() {
    this.selectedUser.emit(this.user.Id);
  }
}