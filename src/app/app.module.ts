import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { AddedTaskComponent } from "./tasks/added-task/added-task.component";


@NgModule({
 declarations:[AppComponent, HeaderComponent, UserComponent, CardComponent, TaskComponent, TasksComponent, AddedTaskComponent],
 bootstrap: [ AppComponent],
 imports: [BrowserModule, FormsModule]
})

export class AppModule{

}
