import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MenubarComponent } from './header/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenubarComponent,
  ], // view objects - component,pipe,directives
  imports: [BrowserModule], //all sub modules
  providers: [],
  //which component is entry /main/rot
  bootstrap: [AppComponent],
})
export class AppModule {}
