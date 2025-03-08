import { Injectable } from '@angular/core';
import { BaseTaskComponent } from '../app/base-task/base-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] =  [
    { id: 1, title: 'Complete project', description: 'Work on the final project', category: 'Work', status: 'Pending', deadline: new Date() },
    { id: 2, title: 'Buy groceries', description: 'Milk, eggs, bread', category: 'Personal', status: 'Pending', deadline: new Date() }
  ];

  getTasks(){
    return this.tasks;
  }
  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  markTaskCompleted(id:number){
    const task = this.tasks.find(task => task.id === id);
    if (task) task.status = 'Completed';
  }
  
}
