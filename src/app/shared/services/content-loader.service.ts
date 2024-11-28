import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ContentConfig } from '../config/content-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {
  constructor(private http: HttpClient) {}

  /**
   * Loads content data based on configuration
   */
  loadContent<T>(config: ContentConfig): Observable<T> {
    return this.http.get<T>(config.dataSource).pipe(
      catchError(error => {
        console.error('Error loading content:', error);
        return of({} as T);
      })
    );
  }

  /**
   * Loads quick navigation data if available
   */
  loadQuickNav(config: ContentConfig) {
    if (!config.quickNavSource) {
      return of(null);
    }
    
    return this.http.get(config.quickNavSource).pipe(
      catchError(error => {
        console.error('Error loading quick navigation:', error);
        return of(null);
      })
    );
  }
}