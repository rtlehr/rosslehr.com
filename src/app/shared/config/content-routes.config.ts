import { ContentRouteMap } from './content-config.interface';

export const contentRoutes: ContentRouteMap = {
  'design': {
    componentType: 'content-list',
    dataSource: 'assets/data/design-content.json',
    quickNavSource: 'assets/data/design-nav.json'
  },
  'development': {
    componentType: 'content-list',
    dataSource: 'assets/data/development-content.json',
    quickNavSource: 'assets/data/development-nav.json'
  },
  'portfolio': {
    componentType: 'gallery',
    dataSource: 'assets/data/portfolio-gallery.json'
  },
  'blog': {
    componentType: 'article',
    dataSource: 'assets/data/blog-articles.json',
    quickNavSource: 'assets/data/blog-nav.json'
  }
};