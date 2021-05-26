import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [],
})
export class ParentComponent {
  childMessage: string = '';
  onReadData(data: any) {
    this.childMessage = data;
  }
}
