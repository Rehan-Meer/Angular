import { Component, Input, signal, input, computed, Output, EventEmitter, output } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DivComponent } from "../../shared/div/div.component";
import { type User } from "../../Models/user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, DivComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({ required: true }) Id !: string;
  // @Input({ required: true }) avatar !: string;
  // name = input.required<String>();
  @Input({required : true}) user !: User;
  @Output() selectedUser = new EventEmitter<string>();
  //selectedUser = output<string>();
  
  get ImagePath(){return 'assets/users/' + this.user.Avatar;}
  //ImagePath = computed(() => { `assets/users/${this.avatar}`; })

  onSelectUser() {
    this.selectedUser.emit(this.user.Id);
  }
}