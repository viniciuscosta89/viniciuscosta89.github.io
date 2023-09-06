import type { JobType } from '@type/jobs';
import wefitIcon from '@assets/wefit-logo.png';

export const jobs: JobType[] = [
  {
    name: 'WeFit',
    url: 'https://wefit.com.br',
    role: 'Front-end Developer/Tech Designer',
    when: {
      from: 'Ago 2023',
      to: 'Current',
    },
    icon: wefitIcon.src,
    activities: ['In development ⚠️'],
  },
  {
    name: 'Valtech',
    url: 'https://valtech.com',
    role: 'Mid-level Front-end Developer',
    when: {
      from: 'Oct 2021',
      to: 'Jun 2023',
    },
    activities: [
      'Institutional website development with AEM, Javascript and Sass',
      'Customer area development with AEM, React, Typescript, ChakraUI and Jest.',
    ],
  },
  {
    name: 'upLexis',
    url: 'https://uplexis.com.br',
    role: 'Jr Front-end Developer',
    when: {
      from: 'Jan 2019',
      to: 'Oct 2021',
    },
    activities: [
      'WordPress institutional website maintenance and upgrade',
      'Apps maintenance and upgrades (HTML, CSS, jQuery, Bootstrap, Gulp)',
      'New apps and new app versions with new technologies (Vue.js, Vuex, webpack, Flexbox, CSS Grid, Sass, BEM, ITCSS)',
    ],
  },
  {
    name: 'Nuova/Fly Age',
    url: 'https://www.linkedin.com/company/fly-age/',
    role: 'Front-end Developer',
    when: {
      from: 'Ago 2016',
      to: 'Jun 2018',
    },
    activities: [
      'Landing pages development',
      'Static websites maintenance (SharePoint and WordPress)',
      'Email marketing layout development',
    ],
  },
];
