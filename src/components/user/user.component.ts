import { Component, Input, signal, input, computed, Output, EventEmitter, output } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  @Input({ required: true }) Id !: string;
  @Input({ required: true }) avatar !: string;
  name = input.required<String>();


  @Output() selectedUser = new EventEmitter<string>();
  //selectedUser = output<string>();


  get ImagePath(){return 'assets/users/' + this.avatar;}
  //ImagePath = computed(() => { `assets/users/${this.avatar}`; })

  onSelectUser() {
    this.selectedUser.emit(this.Id);
  }
}