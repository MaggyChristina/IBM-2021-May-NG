import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { filter,  map, mergeMap, take, takeLast } from 'rxjs/operators';

import { Todo } from '../types/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodohttpService {

  constructor(private http: HttpClient) { }
  //findAll
  public findAll(): Observable<Todo[]> {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Todo[]>(url).pipe(
      map(todos => todos.filter(todo => todo.completed)),
      map(todos => todos.filter(todo => todo.id===40)),
    )
  }

}
