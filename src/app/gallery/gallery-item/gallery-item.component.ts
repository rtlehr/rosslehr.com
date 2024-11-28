import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryItem } from '../gallery-item.interface';

/**
 * Component responsible for rendering individual gallery items
 * Features:
 * - Responsive card layout
 * - Image display with proper sizing
 * - Hover effects for better user interaction
 * - Router integration for navigation
 */
@Component({
  selector: 'app-gallery-item',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="card h-100 gallery-item">
      <img [src]="item.image" [alt]="item.title" class="card-img-top gallery-image">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.description}}</p>
        <a [routerLink]="item.link" class="btn btn-primary">View Details</a>
      </div>
    </div>
  `,
  styles: [`
    /* Maintain consistent image height across all gallery items */
    .gallery-image {
      height: 200px;
      object-fit: cover;
    }
    /* Smooth hover animation for better user experience */
    .gallery-item {
      transition: transform 0.2s;
    }
    /* Subtle lift effect on hover */
    .gallery-item:hover {
      transform: translateY(-5px);
    }
  `]
})
export class GalleryItemComponent {
  // Input property to receive gallery item data from parent component
  @Input() item!: GalleryItem;
}