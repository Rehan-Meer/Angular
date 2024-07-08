import { Component,EventEmitter,Output } from "@angular/core";
@Component(
    {
  selector : 'app-header',
  standalone : true,
  templateUrl : './header.component.html',
  styleUrl : './header.component.css'
    })
export class HeaderComponent
{

  @Output() SignUpRequested = new EventEmitter<void>();
  
  OnSignUp()
  {
    this.SignUpRequested.emit();
  }

}
