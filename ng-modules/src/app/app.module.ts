import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { GreeterModule } from './greeter/greeter.module';
//import { TodoModule } from './todo/todo.module';
import { AppDomainSharedModule } from './app-domain-shared-module.module';
import { AppSharedModule } from './app-shared-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,GreeterModule, TodoModule, AppDomainSharedModuleModule
    BrowserModule, AppDomainSharedModule, AppSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
