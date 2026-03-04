import { MenuGroup } from '../models/menu.model';

export const MENU_DATA: MenuGroup[] = [
  {
    id: 1,
    name: 'Завтрак',
    items: [
      { id: 1, label: 'Каша овсяная', value: 120, checked: false },
      { id: 2, label: 'Яичница', value: 180, checked: false },
      { id: 3, label: 'Тост с маслом', value: 90, checked: false },
      { id: 4, label: 'Кофе', value: 150, checked: false },
    ],
  },
  {
    id: 2,
    name: 'Обед',
    items: [
      { id: 5, label: 'Борщ', value: 250, checked: false },
      { id: 6, label: 'Котлета по-киевски', value: 380, checked: false },
      { id: 7, label: 'Салат Цезарь', value: 290, checked: false },
      { id: 8, label: 'Компот', value: 80, checked: false },
    ],
  },
  {
    id: 3,
    name: 'Ужин',
    items: [
      { id: 9, label: 'Паста карбонара', value: 420, checked: false },
      { id: 10, label: 'Греческий салат', value: 220, checked: false },
      { id: 11, label: 'Тирамису', value: 310, checked: false },
      { id: 12, label: 'Чай с лимоном', value: 70, checked: false },
    ],
  },
];
