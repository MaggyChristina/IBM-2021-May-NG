import { Component } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styles: [
  ]
})
export class AttributebindingComponent {
    //image name and its location.
    imgUrl:string = "favicon.ico";
    isEnabled:boolean = true
}
