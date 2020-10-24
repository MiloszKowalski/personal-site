import { Project } from '../Portfolio';

const frontendProjects: Project[] = [
  {
    id: 'mkowalski-dev',
    title: 'portfolio.frontend.mkowalski-dev.title',
    description: 'portfolio.frontend.mkowalski-dev.description',
    technologies: [
      'React',
      'TypeScript',
      'i18next',
      'Hooks',
      'Context',
      'SVG'
    ],
    picturesUris: [
      'https://i.imgur.com/bs7Xidr.png',
      'https://i.imgur.com/JO1lbxv.png',
      'https://i.imgur.com/IZ8vIg5.png'
    ],
    githubLink: 'https://github.com/MiloszKowalski/portfolio-site'
  },
  {
    id: 'followup-dashboard',
    title: 'portfolio.frontend.followup-dashboard.title',
    description: 'portfolio.frontend.followup-dashboard.description',
    technologies: [
      'JavaScript',
      'Vue.js',
      'Vuex',
      'axios',
      'Chart.js',
      'ESLint',
      'SVG'
    ],
    picturesUris: [
      'https://i.imgur.com/bjTP1En.png',
      'https://i.imgur.com/Dj1uxeq.png',
      'https://i.imgur.com/miKQKXr.png'
    ],
    githubLink: 'https://github.com/MiloszKowalski/followup-dashboard',
    websiteLink: 'https://dashboard.mkowalski.dev'
  },
  {
    id: 'followup-landing',
    title: 'portfolio.frontend.followup-landing.title',
    description: 'portfolio.frontend.followup-landing.description',
    technologies: [
      'DHTML',
      'SCSS',
      'JavaScript',
      'DnaWeb',
      'SVG',
      'SVG\'s clipPath',
      'Netlify Forms'
    ],
    picturesUris: [
      'https://i.imgur.com/Q27tCUH.png',
      'https://i.imgur.com/RlSxLSp.png',
      'https://i.imgur.com/6QUC28C.png',
      'https://i.imgur.com/POqYF89.png'
    ],
    githubLink: 'https://github.com/MiloszKowalski/followup-website',
    websiteLink: 'https://followup-landing.netlify.app'
  }
]

export default frontendProjects;