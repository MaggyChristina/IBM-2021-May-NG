import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {

  today:any = new Date();
  name:string = "subramaian";
  a:number =17873.89
  b:number=987.89

  profile = {
    id:1,
    name:'Subramanian'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
