import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-added-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './added-task.component.html',
  styleUrl: './added-task.component.css'
})
export class AddedTaskComponent {

  @Input() userId!: string;
  constructor(private tasksService: TasksService){}

  @Output() close = new EventEmitter<void>();
 // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)

    //Close dialog box after submit
    this.close.emit();
  }

}
