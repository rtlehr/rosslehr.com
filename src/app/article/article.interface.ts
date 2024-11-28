/**
 * Defines the structure for article content
 * Ensures type safety and consistent data structure
 */
export interface Article {
  id: number;
  title: string;
  date: string;
  content: string;
}