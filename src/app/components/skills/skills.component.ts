import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
currentTheme = this.themeService.getCurrentTheme();
  skillCategories: SkillCategory[] = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Angular', 'React', 'Bootstrap', 'Angular Material', 'PrimeNG'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Webpack', 'NPM', 'Responsive Design'],
    },
  ];

  constructor(private themeService: ThemeService) {}
}
