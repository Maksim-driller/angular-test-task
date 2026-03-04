import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <h1>Добро пожаловать!</h1>
      <p>Это тестовое приложение для управления меню. Выбирайте пункты меню и отслеживайте выбор в заголовке.</p>
      <a routerLink="/menu" class="btn">Перейти к меню →</a>
    </div>
  `,
  styles: [
    `
      .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 64px);
        text-align: center;
        padding: 20px;
      }
      h1 {
        font-size: 2.5rem;
        color: #1e293b;
        margin-bottom: 16px;
      }
      p {
        font-size: 1.1rem;
        color: #64748b;
        max-width: 480px;
        margin-bottom: 36px;
        line-height: 1.6;
      }
      .btn {
        display: inline-block;
        background: #3b82f6;
        color: white;
        padding: 14px 32px;
        border-radius: 8px;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        transition: background 0.2s;
      }
      .btn:hover {
        background: #2563eb;
      }
    `,
  ],
})
export class HomeComponent {}
