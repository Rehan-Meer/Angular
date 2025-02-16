import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app/app.component";
import { HeaderComponent } from "../components/header/header.component";
import { SignUp } from "../components/signup/signup.component";
import { UserComponent } from "../components/user/user.component";
import { SharedModule } from "../sharedmodules/shared.module";
import { NewUserComponent } from "../components/new-user/new-user.component";
import { TaskModule } from "./task.module";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, SignUp,NewUserComponent], // for non-standalone components
  imports: [BrowserModule, TaskModule, SharedModule,HttpClientModule,FormsModule], //  for standalone components
  bootstrap: [AppComponent],
})
export class AppModule {}
