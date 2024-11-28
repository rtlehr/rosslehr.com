/**
 * Interface defining the structure of a gallery item
 * Used to ensure type safety and consistent data structure across the gallery
 */
export interface GalleryItem {
  id: number;          // Unique identifier for each gallery item
  title: string;       // Title/heading of the gallery item
  image: string;       // URL or path to the item's image
  description: string; // Brief description of the gallery item
  link: string;        // Navigation link to the detail page
}