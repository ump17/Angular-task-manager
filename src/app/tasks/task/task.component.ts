import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: false,
  //imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  //Dependency Injection
  constructor(private tasksService: TasksService) {}

  @Input() task!: Task;
  // @Output() userToBeDeleted = new EventEmitter<string>();

  deleteTask(id: string) {
    this.tasksService.removeTask(this.task.id);
  }
}
