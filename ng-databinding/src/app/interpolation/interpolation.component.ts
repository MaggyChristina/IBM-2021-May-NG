import { Component} from '@angular/core';
import {Address} from '../types/address.type'
@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent {
   //data -state - model
   firstName:string = "Subramaian"  
   lastName="Murugan"
   age:number =18
   isActive:boolean = true;
   //literal object
   address:Address = {
     street:'10th street',
     city:'Coimbatore'
   }

}
