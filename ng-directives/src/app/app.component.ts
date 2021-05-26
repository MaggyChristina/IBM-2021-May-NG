import { Todo } from './types/todo.type';
import { Component } from '@angular/core';
import { TODOS } from './mock-data/todo.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    this.delay();
  }
  numList: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  todos: Array<Todo> = TODOS;
  isHidden: boolean = true;
  isEnabled: boolean = true;
  loading: boolean = false;
  status: string = 'You are lucky';
  loaderMessage: string = 'Loading.....';

  input: string = '';
  feedback: string = "good"
  toogleEnabled() {
    this.isHidden = !this.isHidden;
  }
  showFacility() {
    this.isEnabled = !this.isEnabled;
  }
  delay() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 5000);
  }
  showFeedback() {
    this.feedback = this.input
  }
}
