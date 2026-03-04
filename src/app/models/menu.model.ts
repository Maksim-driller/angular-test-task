export interface MenuItem {
  id: number;
  label: string;
  value: number;
  checked: boolean;
}

export interface MenuGroup {
  id: number;
  name: string;
  items: MenuItem[];
}
