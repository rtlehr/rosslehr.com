import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './gallery.service';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryItem } from './gallery-item.interface';

/**
 * Main gallery component that orchestrates the display of gallery items
 * Features:
 * - Responsive grid layout
 * - Dynamic data loading
 * - Modular component structure
 * - Standalone component configuration
 */
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, GalleryItemComponent],
  template: `
    <div class="py-4">
      <!-- Section header -->
      <h2 class="text-center mb-4">Our Portfolio</h2>
      <!-- Responsive grid layout for gallery items -->
      <div class="row g-4">
        <!-- Iterate over gallery items using Angular's new control flow -->
        @for (item of galleryItems; track item.id) {
          <div class="col-md-4">
            <!-- Individual gallery item component -->
            <app-gallery-item [item]="item"></app-gallery-item>
          </div>
        }
      </div>
    </div>
  `
})
export class GalleryComponent implements OnInit {
  // Array to store gallery items fetched from the service
  galleryItems: GalleryItem[] = [];

  constructor(private galleryService: GalleryService) {}

  /**
   * Lifecycle hook that runs after component initialization
   * Fetches gallery items from the service and populates the component
   */
  ngOnInit(): void {
    this.galleryService.getGalleryItems()
      .subscribe(items => this.galleryItems = items);
  }
}