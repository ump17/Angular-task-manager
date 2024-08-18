import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddedTaskComponent } from './added-task/added-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'user-task',
  standalone: false,
 // imports: [TaskComponent, AddedTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) taskName!: string;

  @Input() addTaskButtonClicked: boolean = false;

  //Dependency Injection
  constructor(private tasksService: TasksService) {}

  get selectedUsersTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // deleteThisUser(id: string) {
  //   return this.tasksService.removeTask(id);
  // }

  addTask() {
    this.addTaskButtonClicked = true;
  }

  clickedCancelOnDialog() {
    this.addTaskButtonClicked = false;
  }

  //Already handled it in - AddedTaskComponent file
  // onAddTask(taskData: NewTaskData) {
  //   this.tasksService.addTask(taskData, this.userId);
  //   this.addTaskButtonClicked = false;
  // }
}
