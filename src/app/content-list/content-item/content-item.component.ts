import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItem } from '../content-item.interface';
import { QuickNavComponent } from '../../quick-nav/quick-nav.component';

@Component({
  selector: 'app-content-item',
  standalone: true,
  imports: [CommonModule, QuickNavComponent],
  template: `
    <div class="content-item card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col-md-9">
            <h3 class="card-title h5 mb-3">{{item.title}}</h3>
            <div class="d-flex gap-3">
              <div class="content-image-container">
                <img [src]="item.image" [alt]="item.title" class="content-image rounded">
              </div>
              <div class="content-details">
                <p class="card-text">{{item.content}}</p>
                <small class="text-muted">{{item.date | date:'mediumDate'}}</small>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <app-quick-nav [contentId]="item.id"></app-quick-nav>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .content-image-container {
      flex: 0 0 120px;
    }
    .content-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    .content-details {
      flex: 1;
    }
    .content-item {
      transition: transform 0.2s ease-in-out;
    }
    .content-item:hover {
      transform: translateY(-2px);
    }
  `]
})
export class ContentItemComponent {
  @Input() item!: ContentItem;
}