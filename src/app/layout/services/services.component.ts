import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <div class="services-section bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-5">Our Services</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="service-card text-center p-4">
              <i class="bi bi-palette fs-1 text-primary mb-3"></i>
              <h4>Brand Design</h4>
              <p>Create memorable brand identities that leave lasting impressions</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-card text-center p-4">
              <i class="bi bi-laptop fs-1 text-primary mb-3"></i>
              <h4>Web Design</h4>
              <p>Craft beautiful and functional websites that engage users</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-card text-center p-4">
              <i class="bi bi-phone fs-1 text-primary mb-3"></i>
              <h4>Mobile Design</h4>
              <p>Design intuitive mobile experiences that users love</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {}