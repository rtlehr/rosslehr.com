import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentItem } from './content-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentListService {
  constructor(private http: HttpClient) {}

  getContentItems(): Observable<ContentItem[]> {
    return this.http.get<{items: ContentItem[]}>('assets/data/content-items.json')
      .pipe(
        map(response => response.items)
      );
  }
}