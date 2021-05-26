import { Component,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent  {

  message:string = ""
  @Input()
  name:string= ""
  //onSendRequest is name of the event : custom event
  //EventEmitter is going to broad cast data to parent
  //type of data can be anything based on <T>
  @Output()
  onSendRequest = new EventEmitter<String>();

   public onSend(){
      this.onSendRequest.emit(`${this.message} ${this.name}`)
   }

}
