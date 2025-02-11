import { bootstrapApplication } from '@angular/platform-browser';
import { TodoListComponent } from './app/todo-list/todo-list.component';
import { appConfig } from './app/app.config';

bootstrapApplication(TodoListComponent, appConfig)
  .catch(err => console.error(err));