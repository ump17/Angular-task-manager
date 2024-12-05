import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { sharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { AddedTaskComponent } from "./tasks/added-task/added-task.component";


@NgModule({
 declarations:[AppComponent, HeaderComponent, UserComponent, TaskComponent, TasksComponent, AddedTaskComponent],
 bootstrap: [ AppComponent],
 imports: [BrowserModule, FormsModule, sharedModule]
})

export class AppModule{

}
