import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLoaderService } from '../shared/services/content-loader.service';
import { Article } from './article.interface';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="article-container py-4">
      <div class="container">
        @if (article) {
          <article class="bg-white rounded-3 shadow-sm p-4">
            <h1 class="display-5 mb-3">{{article.title}}</h1>
            <div class="text-muted mb-4">
              <small>{{article.date | date:'longDate'}}</small>
            </div>
            <div class="article-content" [innerHTML]="article.content"></div>
          </article>
        } @else {
          <div class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .article-content {
      line-height: 1.8;
      font-size: 1.1rem;
    }
    
    .article-content :deep(h2) {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    .article-content :deep(p) {
      margin-bottom: 1.5rem;
    }
    
    .article-content :deep(img) {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      margin: 1.5rem 0;
    }
    
    .article-content :deep(blockquote) {
      border-left: 4px solid var(--bs-primary);
      padding-left: 1rem;
      margin-left: 0;
      color: var(--bs-gray-700);
    }
  `]
})
export class ArticleComponent implements OnInit {
  article: Article | null = null;

  constructor(private contentLoader: ContentLoaderService) {}

  ngOnInit(): void {
    const config = JSON.parse(sessionStorage.getItem('currentContentConfig') || '{}');
    if (config) {
      this.contentLoader.loadContent<{articles: Article[]}>(config)
        .subscribe(data => {
          if (data.articles?.length > 0) {
            this.article = data.articles[0];
          }
        });
    }
  }
}