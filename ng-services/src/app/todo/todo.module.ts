import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
