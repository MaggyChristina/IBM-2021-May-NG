import { NgModule } from "@angular/core";
import { AppSharedModule } from "../app-shared-module.module";
import { GreeterComponent } from "./greeter.component";
import { HaiComponent } from "./hai.component";

@NgModule({
    declarations: [GreeterComponent,HaiComponent],
    imports: [AppSharedModule],
    providers: [],
    exports: [GreeterComponent]
})
export class GreeterModule {

}