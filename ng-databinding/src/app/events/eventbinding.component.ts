import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class EventbindingComponent {
  name: string = '...';
  foo: number;
  //Listener function
  public onClick() {
    console.log('button is clicked');
  }
  public onUpdate(value: string) {
    console.log(`${value}`);
  }
  public getEvent(evt: MouseEvent) {
    console.log(evt);
    console.dir(evt.target);
  }
  // public onInput(evt: any) {
  //   console.log(evt.target.value);
  //   this.name = evt.target.value
  // }
}
