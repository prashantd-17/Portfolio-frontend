import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

private theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', currentTheme);
    });
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  getCurrentTheme() {
    return this.theme.asReadonly();
  }

  toggleTheme() {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }}
