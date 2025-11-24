import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link:string;
  showLink:boolean
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 currentTheme = this.themeService.getCurrentTheme();
  projects: Project[] = [
    {
      title: 'ChatGPT Clone',
      description:
        'A full-stack conversational AI application inspired by ChatGPT, allowing users to interact with an intelligent chatbot in real time. The project features a sleek modern UI, persistent chat history, and smooth typing responses. It is powered by a Large Language Model API to generate human-like responses based on user prompts.',
      tech: ['Angular', 'TypeScript', 'Bootstrap', 'NodeJS'],
      image: '../../../assets/ChatGPT.jpg',
      link: 'https://chatgpt-clone-ojwd.vercel.app',
      showLink: false
    },
    {
      title: 'TextFusion AI',
      description:
        'A smart multilingual application that converts speech or audio into accurate text and translates it into multiple languages in real time. It supports audio upload, live microphone input, fast text translation, and includes both speech-to-text and text-to-speech features — all wrapped in a simple and intuitive user interface.',
      tech: ['Angular', 'TypeScript', 'Bootstrap', 'NodeJS'],
      image: '../../../assets/translator.png',
      link: 'https://transcriptor-v5w8.onrender.com',
      showLink : true
    },
    {
      title: 'Thumbnail Downloader',
      description:
        'A responsive weather application with location search, forecasts, and beautiful data visualizations using external APIs.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
      image: '../../../assets/image.png',
      link : 'https://thumbnail-frontend-e3ug.onrender.com',
      showLink : true
    },
    {
      title: 'Car Insurance',
      description:
        'A web application designed to simplify and automate car insurance processes, including policy creation, premium calculation, customer management, claim processing, and renewal reminders. The system ensures secure data handling, fast policy generation, and a seamless user experience for both customers and administrators.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Angular Material'],
      image: '../../../assets/insurance.png',
      link : 'https://car-insurace.vercel.app/car-insurance',
      showLink: false
    },
  ];

    contributions: Project[] = [
    {
      title: 'Project Health Analyzer',
      description:
        'A friendly CLI tool that analyzes your project’s health, shows rich reports (console + JSON + PNG + HTML), and even helps you safely upgrade dependencies.',
      tech: ['TypeScript', 'Bootstrap', 'NodeJS', 'NPM', 'JavaScript'],
      image: '../../../assets/npm.png',
      link: 'https://www.npmjs.com/package/project-health-analyzer',
      showLink: true
    }, 
    {
      title: 'MigratorX',
      description:
        'Migrating large projects is time-consuming and risky — breaking changes, deprecated modules, Protractor removal, Ivy migration leftovers, RxJS updates, tsconfig changes, and unexpected build failures.',
      tech: ['TypeScript', 'Bootstrap', 'NodeJS', 'NPM', 'JavaScript'],
      image: '../../../assets/npm.png',
      link: 'https://www.npmjs.com/package/migratorx',
      showLink: true
    },
  ];
  constructor(private themeService: ThemeService) {}
}
