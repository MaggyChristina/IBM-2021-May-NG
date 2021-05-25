import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// create module

@NgModule({
  //information to di /injector system :create objects and make it available for use
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  //Which is front controller /Home page /entry page
  bootstrap: [AppComponent],
})
export class AppModule {}
