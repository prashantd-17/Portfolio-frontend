import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
currentTheme = this.themeService.getCurrentTheme();

  constructor(private themeService: ThemeService) {}

  scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
