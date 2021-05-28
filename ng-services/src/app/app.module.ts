import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './todo/todo.service';
//import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  // providers: [TodoService],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
