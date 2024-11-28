import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLoaderService } from '../shared/services/content-loader.service';
import { ContentItemComponent } from './content-item/content-item.component';
import { ContentItem } from './content-item.interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentItemComponent],
  template: `
    <div class="content-list py-4">
      <div class="container">
        @if (contentItems.length > 0) {
          <div class="row">
            <div class="col-12">
              @for (item of contentItems; track item.id) {
                <app-content-item [item]="item"></app-content-item>
              }
            </div>
          </div>
        } @else {
          <div class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class ContentListComponent implements OnInit {
  contentItems: ContentItem[] = [];

  constructor(private contentLoader: ContentLoaderService) {}

  ngOnInit(): void {
    const config = JSON.parse(sessionStorage.getItem('currentContentConfig') || '{}');
    if (config) {
      this.contentLoader.loadContent<{items: ContentItem[]}>(config)
        .subscribe(data => this.contentItems = data.items || []);
    }
  }
}