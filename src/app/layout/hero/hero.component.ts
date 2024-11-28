import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <div class="hero-section position-relative">
      <img 
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
        alt="Design Studio" 
        class="hero-image"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1 class="display-3 fw-bold text-white mb-4">Creative Design Solutions</h1>
        <p class="lead text-white mb-4">Transform your ideas into stunning visual experiences</p>
        <button class="btn btn-primary btn-lg me-3">Get Started</button>
        <button class="btn btn-outline-light btn-lg">Learn More</button>
      </div>
    </div>
  `
})
export class HeroComponent {}