import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Welcome to Angular!</h5>
        <p class="card-text">This is a simple demonstration of Bootstrap integration with Angular.</p>
        <a href="https://angular.dev/overview" class="btn btn-primary" target="_blank">Learn More</a>
      </div>
    </div>
  `
})
export class WelcomeComponent {}