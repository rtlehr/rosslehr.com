/**
 * Interface for Quick Navigation menu items
 */
export interface QuickNavItem {
  id: number;
  contentId: number; // References the associated content item
  title: string;
  link: string;
  order: number;
}