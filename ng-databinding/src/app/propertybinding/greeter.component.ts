import { Component,Input} from '@angular/core';
import {Address} from '../types/address.type'
@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styles: [
  ]
})
export class GreeterComponent {
   @Input()
   message:string="";
   @Input("sendToWhom")
   whom:string=""
   @Input()
   when:any
   @Input()
   address:Address={
     city:''
   }
}
