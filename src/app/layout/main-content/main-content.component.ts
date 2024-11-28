import { Component } from '@angular/core';

/**
 * Main content component displaying the primary content area.
 * Features:
 * - Card-based layout for content organization
 * - Responsive grid system
 * - Shadow effects for visual hierarchy
 * - Flexible content areas for different types of information
 */
@Component({
  selector: 'app-main-content',
  standalone: true,
  template: `
    <div class="py-4">
      <div class="row g-4">
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-body">
              <h2 class="card-title h4 mb-3">Dashboard Overview</h2>
              <p class="card-text">Welcome to your dashboard. Here's an overview of your recent activity.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h3 class="card-title h5 mb-3">Recent Activity</h3>
              <p class="card-text">Track your latest updates and changes here.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h3 class="card-title h5 mb-3">Statistics</h3>
              <p class="card-text">View your performance metrics and analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MainContentComponent {}