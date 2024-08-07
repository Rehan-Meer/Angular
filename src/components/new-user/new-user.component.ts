import { Component, EventEmitter, Output, output } from '@angular/core';

import { ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user.model';
@Component({
  selector: 'app-new-user',
  standalone: false,
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  userName: string = '';
  profileImage: File | null = null;
  imageUrl: string | null = null;


  constructor(private userService: UserService) { }

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;
 @Output() NewUserCreated = new EventEmitter<User>();
  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.profileImage = input.files[0];
      this.imageUrl = window.URL.createObjectURL(this.profileImage);
    }
  }

  triggerFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onSubmit(): void {

    const user: User = {
      Id: 0,
      Name: this.userName,
      Tasks: [],
      Password: 'aa',
      IsActive: true
    };

    this.userService.createUser(user).subscribe({
      next: (response) => {
        this.NewUserCreated.emit(user);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });

  }

  onCancel(): void {
      this.userName = '';
      this.profileImage = null;
      this.imageUrl = null;
    }
}
