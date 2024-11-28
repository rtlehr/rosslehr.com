import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuickNavItem } from './quick-nav-item.interface';

@Injectable({
  providedIn: 'root'
})
export class QuickNavService {
  constructor(private http: HttpClient) {}

  getQuickNavItems(contentId: number): Observable<QuickNavItem[]> {
    return this.http.get<{items: QuickNavItem[]}>('assets/data/quick-nav.json')
      .pipe(
        map(response => response.items.filter(item => item.contentId === contentId)
          .sort((a, b) => a.order - b.order))
      );
  }
}