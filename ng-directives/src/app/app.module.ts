import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HighlightDirective} from './highlight.directive';
import { TemplateReferenceComponent } from './template-reference.component'

@NgModule({
  declarations: [
    AppComponent,HighlightDirective, TemplateReferenceComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
