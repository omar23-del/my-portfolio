import { Injectable } from '@angular/core';
import { Skills } from '../interfaces/skills';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getSkills(): Skills[] {
    return [
      {
        name: 'HTML',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        alt: 'HTML'
      },
      {
        name: 'CSS',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        alt: 'CSS'
      },
      {
        name: 'JavaScript',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        alt: 'JavaScript'
      },
      {
        name: 'TypeScript',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        alt: 'TypeScript'
      },
      {
        name: 'Angular',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        alt: 'Angular'
      },
      {
        name: 'React',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        alt: 'React'
      },
      {
        name: 'Bootstrap',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        alt: 'Bootstrap'
      },
      {
        name: 'Tailwind CSS',
        imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg',
        alt: 'Tailwind CSS'
      },
      {
        name: 'Ant Design',
        imageUrl: 'https://avatars.githubusercontent.com/u/12101536?s=200&v=4',
        alt: 'Ant Design'
      },
      {
        name: 'Git',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        alt: 'Git'
      },
      {
        name: 'GitHub',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        alt: 'GitHub'
      }
    ];
  }
}
