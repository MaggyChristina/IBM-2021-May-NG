import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiccss',
  templateUrl: './dynamiccss.component.html',
  styles: [
  ]
})
export class DynamiccssComponent implements OnInit {

 isActive:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  changeStyle() {
    this.isActive = !this.isActive
  }

}
