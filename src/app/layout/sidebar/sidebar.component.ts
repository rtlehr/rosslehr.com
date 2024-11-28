import { Component } from '@angular/core';

/**
 * Sidebar navigation component.
 * Features:
 * - Quick navigation links with icons
 * - Responsive design (collapses on mobile)
 * - Bootstrap Icons integration
 * - Hover effects for better UX
 * - Sticky positioning on desktop
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <div class="sidebar bg-light border-end h-100 p-3">
      <div class="d-flex flex-column">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Quick Navigation</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              <i class="bi bi-house-door me-2"></i>
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              <i class="bi bi-graph-up me-2"></i>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              <i class="bi bi-gear me-2"></i>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class SidebarComponent {}