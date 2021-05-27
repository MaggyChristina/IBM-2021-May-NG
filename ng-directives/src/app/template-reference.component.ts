import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styles: [
  ]
})
export class TemplateReferenceComponent implements OnInit {

  firstName:string
  constructor() { }

  ngOnInit(): void {
  }
  setName(value:string){
    this.firstName = value;
  }

}
