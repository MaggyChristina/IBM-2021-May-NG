import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { GreeterComponent } from './propertybinding/greeter.component';
import { EventbindingComponent } from './events/eventbinding.component';
import { DynamiccssComponent } from './cssbinding/dynamiccss.component';
import { ParentComponent } from './customevents/parent.component';
import { ChildComponent } from './customevents/child.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    AttributebindingComponent,
    PropertybindingComponent,
    GreeterComponent,
    EventbindingComponent,
    DynamiccssComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
