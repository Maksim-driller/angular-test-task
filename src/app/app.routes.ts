import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: '**', redirectTo: '' },
];
