/**
 * Defines the structure for content items
 * Ensures type safety and consistent data structure
 */
export interface ContentItem {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}