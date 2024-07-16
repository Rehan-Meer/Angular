import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app/app.component";
import { HeaderComponent } from "../components/header/header.component";
import { SignUp } from "../components/signup/signup.component";
import { UserComponent } from "../components/user/user.component";
import { SharedModule } from "../sharedmodules/shared.module";

import { TaskModule } from "./task.module";

@NgModule({

    declarations : [AppComponent,HeaderComponent,UserComponent,SignUp], // for non-standalone components
    imports : [BrowserModule,TaskModule,SharedModule], //  for standalone components
    bootstrap : [AppComponent]
})
export class AppModule
{



}