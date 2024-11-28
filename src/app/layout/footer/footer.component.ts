import { Component } from '@angular/core';

/**
 * Footer component for site-wide footer content.
 * Features:
 * - Responsive layout
 * - Flexible content areas
 * - Copyright information
 * - Important links section
 * - Sticky positioning at bottom
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-muted">© 2024 Modern App. All rights reserved.</span>
          <ul class="list-inline mb-0">
            <li class="list-inline-item"><a href="#" class="text-muted">Privacy</a></li>
            <li class="list-inline-item"><a href="#" class="text-muted">Terms</a></li>
            <li class="list-inline-item"><a href="#" class="text-muted">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}