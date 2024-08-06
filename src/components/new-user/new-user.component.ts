import { Component } from '@angular/core';
import { ViewChild , ElementRef } from '@angular/core';
  @Component({
  selector: 'app-new-user',
  standalone : false,
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  userName: string = '';
  profileImage: File | null = null;
  imageUrl: string | null = null;

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;

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
    console.log('Submitted:', this.userName, this.profileImage);
  }

  onCancel(): void {
    // Handle form cancellation logic here
    this.userName = '';
    this.profileImage = null;
    this.imageUrl = null;
  }
}
