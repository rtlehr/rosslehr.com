import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentResolverService } from '../../shared/services/content-resolver.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <i class="bi bi-code-slash me-2"></i>Modern App
        </a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateTo('design')" routerLinkActive="active">Design</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateTo('development')" routerLinkActive="active">Development</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateTo('portfolio')" routerLinkActive="active">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateTo('blog')" routerLinkActive="active">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      cursor: pointer;
    }
  `]
})
export class HeaderComponent {
  constructor(private contentResolver: ContentResolverService) {}

  navigateTo(path: string): void {
    this.contentResolver.navigateToContent(path);
  }
}