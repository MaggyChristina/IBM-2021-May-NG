import { Component } from "@angular/core";



@Component({
    selector:'app-greeter',
    template:`
       <h1>Greeter Component</h1>
       <input [(ngModel)]="message">
       <app-hai [names]="names" ></app-hai>
    `
})
export class GreeterComponent {
     names:string[] = ["Subramanian","Dhivya Sree","Shirisha","Geetha","Murugan"];
     message:string;
}