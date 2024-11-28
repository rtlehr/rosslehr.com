import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from './article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(id: number): Observable<Article> {
    return this.http.get<{articles: Article[]}>('assets/data/articles.json')
      .pipe(
        map(response => response.articles.find(article => article.id === id) as Article)
      );
  }
}