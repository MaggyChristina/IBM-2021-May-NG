import { Component, Input } from "@angular/core";


@Component({
    selector:'app-hai',
    template:`<ul>
            <li *ngFor="let name of names">{{"hai" | titlecase}} {{name | titlecase}}</li>
       <ul>
    `
})
export class HaiComponent {
   @Input()
   names:Array<string>;
}