import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../types/todo.type';
import { TodoService } from './todo.service';
import { TodohttpService } from './todohttp.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  title: string;
  loading: boolean = true;
  status: string = "Loading..."

  //todos: Array<Todo>;

  todos: Observable<Array<Todo>>;

  //grab todoService object
  constructor(private todoService: TodoService, private todohttp: TodohttpService) { }
  ngOnChanges() {
    //for watching properties send by parent component
    console.log('ngOnChanges')
  }
  // for initalization resources-http,websocket,timers
  ngOnInit(): void {
    //sync api call
    //this.todos = this.todoService.findAll();
    //async api call:callback
    // this.todoService.findAll(todos => {
    //   this.loading = false;
    //   this.todos = todos;
    // });
    //async api call:Promise
    // this.todoService.findAll()
    //   .then(todos => {
    //     this.loading = false;
    //     this.todos = todos;
    //   })
    //   .catch(err => console.log(err));

    //async api call :using Rxjs
    // this.todoService.findAll().subscribe(todos => {
    //   this.todos = todos;
    // }, err => {
    //   console.log(err)
    // }, () => {
    //   console.log('done')
    // })

    //initalize
    //this.todos = this.todoService.findAll();
    this.todos = this.todohttp.findAll();

  }
  ngOnDestroy(): void {
    //when ever the component is removed from memory
  }

}
