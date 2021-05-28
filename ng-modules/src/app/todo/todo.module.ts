import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { AppSharedModule } from '../app-shared-module.module';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
   // CommonModule,FormsModule
    AppSharedModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
