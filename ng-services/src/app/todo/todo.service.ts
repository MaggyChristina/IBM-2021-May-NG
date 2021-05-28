import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { TODOS } from '../mock-data/todos';
import { LoggerService } from '../services/logger.service';
import { Todo } from '../types/todo.type';
//import { TodoModule } from './todo.module';

// @Injectable({
//   providedIn: TodoModule
// })
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private logger: LoggerService) { }

  //sync api
  /**public findAll(): Array<Todo> {
    this.logger.logInfo('todos')
    return TODOS
  }**/
  //Async implementation :using callbacks style : timer
  /**
  public findAll(callback: Function): void {
        this.logger.logInfo('todos')
    setTimeout(callback, 5000, TODOS);
  }
   */
  //Async implementation :using Promise style : timer
  // public findAll(): Promise<Todo[]> {
  //   return new Promise((resolve, reject) => {
  //     this.logger.logInfo('fetching todos')
  //     setTimeout(resolve, 5000, TODOS);
  //   });
  // }
  //Async implementation : using Rxjs

  public findAll(): Observable<Todo[]> {
    return of(TODOS).pipe(
          tap(()=>console.log('fetching data')),
          delay(5000)
    )
  }


}
