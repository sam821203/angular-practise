import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type INewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  private tasksService = new TasksService();

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  handleOnCompleteTask(id: string) {}

  onAddTask() {
    this.isAddingTask = true;
  }

  handleOnCancelAddTask() {
    this.isAddingTask = false;
  }

  handleOnAddTask(taskData: INewTask) {
    this.isAddingTask = false;
  }
}
