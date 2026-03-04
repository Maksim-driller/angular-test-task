import { Injectable, signal, computed } from '@angular/core';
import { MenuGroup } from '../models/menu.model';
import { MENU_DATA } from '../data/menu-data';

@Injectable({ providedIn: 'root' })
export class MenuStateService {
  readonly menus = signal<MenuGroup[]>(JSON.parse(JSON.stringify(MENU_DATA)));
  readonly selectedMenuId = signal<number | null>(null);

  readonly selectedMenu = computed(() => {
    const id = this.selectedMenuId();
    return id !== null ? (this.menus().find((m) => m.id === id) ?? null) : null;
  });

  readonly currentItems = computed(() => this.selectedMenu()?.items ?? []);

  readonly selectedCount = computed(
    () => this.currentItems().filter((i) => i.checked).length
  );

  readonly selectedTotal = computed(() =>
    this.currentItems()
      .filter((i) => i.checked)
      .reduce((sum, i) => sum + i.value, 0)
  );

  selectMenu(id: number): void {
    this.selectedMenuId.set(id);
  }

  toggleItem(itemId: number): void {
    this.menus.update((menus) =>
      menus.map((menu) => ({
        ...menu,
        items: menu.items.map((item) =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        ),
      }))
    );
  }
}
