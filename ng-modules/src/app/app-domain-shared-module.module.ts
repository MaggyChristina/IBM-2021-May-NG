import { NgModule } from '@angular/core';
import { TodoModule } from './todo/todo.module';
import { GreeterModule } from './greeter/greeter.module';

@NgModule({
  declarations: [],
  imports: [
    TodoModule, GreeterModule
  ],
  exports: [TodoModule, GreeterModule]

})
export class AppDomainSharedModule { }
