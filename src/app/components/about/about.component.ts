import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
interface Highlight {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
currentTheme = this.themeService.getCurrentTheme();
  highlights: Highlight[] = [
    {
      icon: 'code',
      title: 'Clean Code',
      description:
        'Writing maintainable, semantic, and performant code that scales',
    },
    {
      icon: 'palette',
      title: 'Design Focus',
      description:
        'Translating designs into pixel-perfect, responsive interfaces',
    },
    {
      icon: 'rocket',
      title: 'Performance',
      description:
        'Optimizing load times and user experience across all devices',
    },
  ];

  constructor(private themeService: ThemeService) {}
}
