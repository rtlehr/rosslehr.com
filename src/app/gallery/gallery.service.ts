import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GalleryItem } from './gallery-item.interface';

/**
 * Service responsible for fetching gallery data
 * Features:
 * - Centralized data fetching
 * - JSON file integration
 * - Type-safe data handling
 * - RxJS integration for reactive data flow
 */
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches gallery items from JSON file
   * @returns Observable of GalleryItem array
   * Maps the response to extract items array from the JSON structure
   */
  getGalleryItems(): Observable<GalleryItem[]> {
    return this.http.get<{items: GalleryItem[]}>('assets/data/gallery-items.json')
      .pipe(
        map(response => response.items)
      );
  }
}