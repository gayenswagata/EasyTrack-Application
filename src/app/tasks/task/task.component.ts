import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

type Task={
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({ required: true }) task!:Task;

  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService)

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
    // this.complete.emit(this.task.id);
  }
}
