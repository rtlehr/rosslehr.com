import { Routes } from '@angular/router';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'design', component: ContentListComponent },
  { path: 'development', component: ContentListComponent },
  { path: 'portfolio', component: GalleryComponent },
  { path: 'blog', component: ArticleComponent },
  { path: '**', redirectTo: '' }
];