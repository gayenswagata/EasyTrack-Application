import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {DUMMY_TASK} from './dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  private tasksService : TasksService;

  constructor(tasksService:TasksService){
    this.tasksService = tasksService;
  }

  isAddingTask = false;
  // tasks = DUMMY_TASK;

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(taskId:string){
  //   // we want to filter out the task that is not equal to the selected task id. so the task can be removed on clicking on complete button
  //   this.tasksService.removeTask(taskId);
  // }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

}
