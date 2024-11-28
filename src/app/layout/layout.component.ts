import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-header></app-header>
      <div class="container-fluid flex-grow-1">
        <div class="row h-100">
          <div class="col-md-3 col-lg-2 d-md-block sidebar-container">
            <app-sidebar></app-sidebar>
          </div>
          <main class="col-md-9 col-lg-10 ms-sm-auto px-md-4">
            <ng-content></ng-content>
          </main>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  `
})
export class LayoutComponent {}