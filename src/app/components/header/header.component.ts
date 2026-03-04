import { Component, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs/operators';
import { MenuStateService } from '../../services/menu-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="header">
      <a routerLink="/" class="logo">Menu App</a>

      @if (isMenuPage()) {
        <div class="stats">
          @if (svc.selectedMenu(); as menu) {
            <span class="stat-menu">{{ menu.name }}</span>
            <span class="stat-badge">Выбрано: {{ svc.selectedCount() }}</span>
            <span class="stat-badge total">Итого: {{ svc.selectedTotal() }} ₽</span>
          } @else {
            <span class="stat-hint">Выберите категорию</span>
          }
        </div>
      }
    </header>
  `,
  styles: [
    `
      .header {
        position: sticky;
        top: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0 24px;
        height: 64px;
        background: #fff;
        border-bottom: 1px solid #e2e8f0;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
      }
      .logo {
        font-size: 1.2rem;
        font-weight: 700;
        color: #1e293b;
        text-decoration: none;
        margin-right: auto;
      }
      .logo:hover {
        color: #3b82f6;
      }
      .stats {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .stat-menu {
        font-weight: 600;
        color: #1e293b;
        font-size: 0.95rem;
      }
      .stat-badge {
        background: #f1f5f9;
        color: #475569;
        font-size: 0.85rem;
        padding: 4px 12px;
        border-radius: 20px;
        white-space: nowrap;
      }
      .stat-badge.total {
        background: #eff6ff;
        color: #1d4ed8;
        font-weight: 600;
      }
      .stat-hint {
        color: #94a3b8;
        font-size: 0.9rem;
        font-style: italic;
      }
    `,
  ],
})
export class HeaderComponent {
  readonly svc = inject(MenuStateService);
  private readonly router = inject(Router);

  readonly isMenuPage = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url.startsWith('/menu')),
      startWith(this.router.url.startsWith('/menu'))
    ),
    { initialValue: false }
  );
}