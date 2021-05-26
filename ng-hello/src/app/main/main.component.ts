import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div>
      <h1>Angular features</h1>
      <h3>Progressive Web Apps</h3>
      <p>
        Use modern web platform capabilities to deliver app-like experiences.
        High performance, offline, and zero-step installation.
      </p>
    </div>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
