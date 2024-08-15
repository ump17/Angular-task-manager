import { Component, Input , Output, EventEmitter} from '@angular/core';

interface Task{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {


@Input() task!: Task;
@Output() userToBeDeleted = new EventEmitter<string>();

deleteTask(id: string){
  this.userToBeDeleted.emit(id);
}

}
