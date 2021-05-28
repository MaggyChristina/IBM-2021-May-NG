import { Component } from '@angular/core';
import{Address} from '../types/address.type';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styles: [
  ]
})
export class PropertybindingComponent {
   whom:string = "Subramaian"; 
   date:any = new Date();
   address:Address = {
     city:'Coimbatore',
     street:'10th street'
   }
}
