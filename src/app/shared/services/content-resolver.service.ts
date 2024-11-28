import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { contentRoutes } from '../config/content-routes.config';
import { ContentConfig } from '../config/content-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentResolverService {
  constructor(private router: Router) {}

  resolveContent(path: string): ContentConfig | null {
    // Remove leading slash if present
    const normalizedPath = path.replace(/^\//, '');
    const config = contentRoutes[normalizedPath];
    if (!config) {
      console.warn(`No content configuration found for path: ${path}`);
      return null;
    }
    return config;
  }

  navigateToContent(path: string): void {
    const config = this.resolveContent(path);
    if (!config) {
      this.router.navigate(['/']);
      return;
    }

    // Store configuration in session for component access
    sessionStorage.setItem('currentContentConfig', JSON.stringify(config));
    
    // Remove leading slash if present for navigation
    const normalizedPath = path.replace(/^\//, '');
    this.router.navigate([normalizedPath]);
  }
}