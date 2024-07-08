import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from "../components/user/user.component";
import { SignUp } from "../components/signup/signup.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, SignUp, CommonModule]
})
export class AppComponent {
  title = 'Angular';
}