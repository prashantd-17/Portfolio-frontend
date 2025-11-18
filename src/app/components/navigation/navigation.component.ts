import { Component, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
isOpen = signal(false);
  navItems = ['About', 'Skills', 'Projects', 'Contact'];
  currentTheme = this.themeService.getCurrentTheme();

  constructor(private themeService: ThemeService) {}

  toggleMenu() {
    this.isOpen.update((v) => !v);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isOpen.set(false);
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.isOpen.set(false);
  }
}
