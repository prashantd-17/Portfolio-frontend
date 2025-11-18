import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 currentTheme = this.themeService.getCurrentTheme();
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured shopping experience with cart management, product filtering, and checkout flow. Built with React and modern state management.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    },
    {
      title: 'Task Management App',
      description:
        'An intuitive task tracker with drag-and-drop functionality, real-time updates, and team collaboration features.',
      tech: ['React', 'Firebase', 'DnD Kit', 'Framer Motion'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather application with location search, forecasts, and beautiful data visualizations using external APIs.',
      tech: ['Next.js', 'Chart.js', 'REST API', 'CSS Modules'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    },
  ];

  constructor(private themeService: ThemeService) {}
}
