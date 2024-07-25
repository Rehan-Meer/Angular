import { Component, EventEmitter, Output } from "@angular/core";
@Component(
    {
  selector : 'app-header',
  standalone : false,
  templateUrl : './header.component.html',
  styleUrl : './header.component.css'
    })
export class HeaderComponent
{
 isclicked!: boolean
  @Output() SignUpRequested = new EventEmitter<boolean>();

  OnSignUp() {
    this.isclicked = !this.isclicked
    this.SignUpRequested.emit(true);
  }
}
