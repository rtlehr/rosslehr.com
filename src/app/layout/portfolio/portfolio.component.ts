import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: `
    <div class="portfolio-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Featured Works</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" 
                alt="Design Project 1"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h5>Brand Identity</h5>
                <p>Corporate Branding</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" 
                alt="Design Project 2"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h5>Web Design</h5>
                <p>E-commerce Platform</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" 
                alt="Design Project 3"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h5>UI/UX Design</h5>
                <p>Mobile Application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PortfolioComponent {}