/**
 * Defines the structure for content configuration
 */
export interface ContentConfig {
  componentType: 'article' | 'gallery' | 'content-list';
  dataSource: string;
  quickNavSource?: string;
}

/**
 * Maps route paths to their content configuration
 */
export interface ContentRouteMap {
  [path: string]: ContentConfig;
}