## Content Routing System

This system provides a flexible way to manage content routing and data loading in the Angular application.

### System Components

1. **ContentConfig Interface** (`content-config.interface.ts`)
   - Defines the structure for content configuration
   - Properties:
     - `componentType`: Type of component to render ('article' | 'gallery' | 'content-list')
     - `dataSource`: Path to JSON data file
     - `quickNavSource`: Optional path to quick navigation JSON file

2. **Content Routes Configuration** (`content-routes.config.ts`)
   - Central configuration for mapping URLs to components and data sources
   - Example configuration:
   ```typescript
   {
     '/design': {
       componentType: 'content-list',
       dataSource: 'assets/data/design-content.json',
       quickNavSource: 'assets/data/design-nav.json'
     }
   }
   ```

3. **ContentResolverService** (`content-resolver.service.ts`)
   - Handles content navigation and configuration resolution
   - Key methods:
     - `resolveContent(path: string)`: Gets configuration for a path
     - `navigateToContent(path: string)`: Navigates to content and stores configuration

4. **ContentLoaderService** (`content-loader.service.ts`)
   - Manages data loading for components
   - Key methods:
     - `loadContent<T>(config: ContentConfig)`: Loads main content data
     - `loadQuickNav(config: ContentConfig)`: Loads quick navigation data

### How to Use

1. **Define New Content Route**
   ```typescript
   // In content-routes.config.ts
   export const contentRoutes: ContentRouteMap = {
     '/my-new-route': {
       componentType: 'content-list',
       dataSource: 'assets/data/my-data.json',
       quickNavSource: 'assets/data/my-nav.json'
     }
   };
   ```

2. **Add Route to Angular Router**
   ```typescript
   // In app.routes.ts
   export const routes: Routes = [
     { path: 'my-new-route', component: ContentListComponent }
   ];
   ```

3. **Create JSON Data Files**
   ```json
   // assets/data/my-data.json
   {
     "items": [
       {
         "id": 1,
         "title": "My Content",
         "content": "Content details..."
       }
     ]
   }
   ```

4. **Navigate to Content in Components**
   ```typescript
   @Component({...})
   export class MyComponent {
     constructor(private contentResolver: ContentResolverService) {}

     navigateToContent() {
       this.contentResolver.navigateToContent('/my-new-route');
     }
   }
   ```

5. **Load Content in Components**
   ```typescript
   @Component({...})
   export class MyContentComponent implements OnInit {
     constructor(private contentLoader: ContentLoaderService) {}

     ngOnInit() {
       const config = JSON.parse(sessionStorage.getItem('currentContentConfig') || '{}');
       if (config) {
         this.contentLoader.loadContent(config).subscribe(data => {
           // Handle loaded data
         });
       }
     }
   }
   ```

### Best Practices

1. **Data Organization**
   - Keep JSON files in `assets/data` directory
   - Use consistent naming conventions for data files
   - Group related data files together

2. **Configuration Management**
   - Keep route configurations organized by feature
   - Use descriptive paths that reflect content purpose
   - Document any special handling requirements

3. **Error Handling**
   - Always provide fallback content for failed data loads
   - Use type safety with interfaces for data structures
   - Handle navigation errors gracefully

4. **Performance**
   - Consider lazy loading for large content sections
   - Implement caching strategies for frequently accessed data
   - Optimize JSON payload sizes

### Troubleshooting

1. **Content Not Loading**
   - Verify JSON file paths are correct
   - Check network requests for data loading errors
   - Ensure configuration is properly stored in session

2. **Navigation Issues**
   - Confirm route is registered in Angular router
   - Check content-routes.config.ts for correct path
   - Verify component type matches the route configuration

3. **Type Errors**
   - Ensure data interfaces match JSON structure
   - Use correct generic types with ContentLoaderService
   - Validate component type strings in configuration