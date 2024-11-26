import { Component, Input, inject } from '@angular/core';
import { type ITask } from './task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  private tasksService = inject(TasksService);
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
