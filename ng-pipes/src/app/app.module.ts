import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe.component';
import {DecimalFractionPipe} from './decmial.fraction.pipe'

@NgModule({
  declarations: [
    AppComponent, PipeComponent, DecimalFractionPipe ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
