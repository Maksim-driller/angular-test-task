import { Component, inject } from '@angular/core';
import { MenuStateService } from '../../services/menu-state.service';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  template: `
    <div class="page">
      <h2>Меню</h2>

      <div class="menu-tabs">
        @for (menu of svc.menus(); track menu.id) {
          <button
            class="tab"
            [class.active]="svc.selectedMenuId() === menu.id"
            (click)="svc.selectMenu(menu.id)"
          >
            {{ menu.name }}
          </button>
        }
      </div>

      @if (svc.selectedMenu(); as menu) {
        <ul class="items">
          @for (item of svc.currentItems(); track item.id) {
            <li class="item" (click)="svc.toggleItem(item.id)">
              <label class="item-inner">
                <input
                  type="checkbox"
                  [checked]="item.checked"
                  (change)="svc.toggleItem(item.id)"
                  (click)="$event.stopPropagation()"
                />
                <span class="item-label">{{ item.label }}</span>
                <span class="item-value">{{ item.value }} ₽</span>
              </label>
            </li>
          }
        </ul>
      } @else {
        <p class="hint">Выберите категорию меню выше, чтобы увидеть пункты.</p>
      }
    </div>
  `,
  styles: [
    `
      .page {
        max-width: 640px;
        margin: 40px auto;
        padding: 0 20px;
      }
      h2 {
        font-size: 1.6rem;
        color: #1e293b;
        margin-bottom: 24px;
      }
      .menu-tabs {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 28px;
      }
      .tab {
        padding: 9px 22px;
        border: 2px solid #e2e8f0;
        background: #fff;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.95rem;
        transition: all 0.15s;
      }
      .tab:hover {
        border-color: #3b82f6;
        color: #1d4ed8;
      }
      .tab.active {
        border-color: #3b82f6;
        background: #eff6ff;
        color: #1d4ed8;
        font-weight: 600;
      }
      .items {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .item {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        transition: background 0.15s;
        cursor: pointer;
      }
      .item:hover {
        background: #f8fafc;
      }
      .item-inner {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        cursor: pointer;
        width: 100%;
        box-sizing: border-box;
      }
      input[type='checkbox'] {
        width: 18px;
        height: 18px;
        accent-color: #3b82f6;
        cursor: pointer;
        flex-shrink: 0;
      }
      .item-label {
        flex: 1;
        font-size: 1rem;
        color: #1e293b;
      }
      .item-value {
        background: #f1f5f9;
        color: #64748b;
        font-size: 0.88rem;
        padding: 3px 10px;
        border-radius: 12px;
        white-space: nowrap;
      }
      .hint {
        color: #94a3b8;
        font-style: italic;
        margin-top: 10px;
      }
    `,
  ],
})
export class MenuPageComponent {
  readonly svc = inject(MenuStateService);
}
