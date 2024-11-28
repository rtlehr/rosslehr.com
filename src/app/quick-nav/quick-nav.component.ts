import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuickNavService } from './quick-nav.service';
import { QuickNavItem } from './quick-nav-item.interface';

@Component({
  selector: 'app-quick-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="quick-nav card">
      <div class="card-body">
        <h5 class="card-title mb-3">Quick Navigation</h5>
        <ul class="list-unstyled mb-0">
          @for (item of navItems; track item.id) {
            <li class="nav-item mb-2">
              <a [routerLink]="item.link" class="nav-link px-3 py-2 rounded">
                {{item.title}}
              </a>
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .nav-link {
      color: var(--bs-body-color);
      transition: all 0.2s ease-in-out;
    }
    .nav-link:hover {
      background-color: var(--bs-light);
      transform: translateX(5px);
    }
  `]
})
export class QuickNavComponent implements OnInit {
  @Input() contentId!: number;
  navItems: QuickNavItem[] = [];

  constructor(private quickNavService: QuickNavService) {}

  ngOnInit(): void {
    this.quickNavService.getQuickNavItems(this.contentId)
      .subscribe(items => this.navItems = items);
  }
}