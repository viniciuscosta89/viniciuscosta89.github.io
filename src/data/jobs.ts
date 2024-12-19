import quantumIcon from '@assets/quantum-logo.svg';
import type { JobType } from '@type/jobs';

export const jobs: JobType[] = [
	{
		id: 5,
		name: 'Quantum Financial',
		url: 'https://www.quantumfintech.com/',
		role: {
			en: 'Front-end Engineer',
			'pt-br': 'Desenvolvedor Front-end',
		},
		when: {
			from: 'Jul 2024',
			to: 'Current',
		},
		icon: quantumIcon.src,
		activities: [
			{
				en: 'Develop components, integrations, features with Next.js, React, Typescript, TailwindCSS, Motion, TanStack Query and Zustand',
				'pt-br':
					'Desenvolver componentes, integrações e features com Next.js, React, Typescript, TailwindCSS, Motion, TanStack Query e Zustand',
			},
			{
				en: 'Develop E2E (end-to-end) and component tests with Cypress',
				'pt-br':
					'Desenvolver testes E2E (end-to-end) e de componente com Cypress',
			},
			{
				en: 'Create new branches, code reviews and merge requests with GitHub',
				'pt-br':
					'Criar novas branches, code reviews e merge requests com GitHub',
			},
			{
				en: 'Manage tasks on Jira',
				'pt-br': 'Gerenciar tarefas no Jira',
			},
			{
				en: 'Participate in daily standups, sprint planning, sprint reviews and sprint retrospectives',
				'pt-br':
					'Participar de standups diários, planejamento de sprint, revisões de sprint e retrospectivas de sprint',
			},
			{
				en: 'Enhancement and evolution of the design system using Storybook',
				'pt-br':
					'Melhoria e aprimoramento contínuo do sistema de design utilizando o Storybook',
			},
		],
	},
	{
		id: 4,
		name: 'WeFit',
		url: 'https://wefit.com.br',
		role: {
			en: 'Front-end Developer/Tech Designer',
			'pt-br': 'Desenvolvedor Front-end/Tech Designer',
		},
		when: {
			from: 'Aug 2023',
			to: 'Jul 2024',
		},
		activities: [
			{
				en: 'Develop components with React, Typescript and Styled Components for AEM',
				'pt-br':
					'Desenvolver componentes com React, Typescript e Styled Components para AEM',
			},
			{
				en: 'Develop A/B tests with HTML, CSS and JS for Adobe Target',
				'pt-br': 'Desenvolver testes A/B com HTML, CSS e JS para Adobe Target',
			},
		],
	},
	{
		id: 3,
		name: 'Valtech',
		url: 'https://valtech.com',
		role: {
			en: 'Mid-level Front-end Developer',
			'pt-br': 'Desenvolvedor Front-end Pleno',
		},
		when: {
			from: 'Oct 2021',
			to: 'Jun 2023',
		},
		activities: [
			{
				en: 'Institutional website development with AEM, Javascript and Sass',
				'pt-br':
					'Desenvolvimento do site institucional com AEM, Javascript e Sass',
			},
			{
				en: 'Customer area development with AEM, React, Typescript, ChakraUI and Jest.',
				'pt-br':
					'Desenvolvimento da área cliente com AEM, React, Typescript, ChakraUI e Jest.',
			},
		],
	},
	{
		id: 2,
		name: 'upLexis',
		url: 'https://uplexis.com.br',
		role: {
			en: 'Jr Front-end Developer',
			'pt-br': 'Desenvolvedor Front-end Júnior / Jr. II',
		},
		when: {
			from: 'Jan 2019',
			to: 'Oct 2021',
		},
		activities: [
			{
				en: 'WordPress institutional website maintenance and upgrade',
				'pt-br': 'Manutenção e atualização do site institucional em WordPress',
			},
			{
				en: 'Apps maintenance and upgrades (HTML, CSS, jQuery, Bootstrap, Gulp)',
				'pt-br':
					'Manutenção e atualização das aplicações (HTML, CSS, jQuery, Bootstrap, Gulp',
			},
			{
				en: 'New apps and new app versions with new technologies (Vue.js, Vuex, webpack, Flexbox, CSS Grid, Sass, BEM, ITCSS)',
				'pt-br':
					'Novo aplicativo e nova versão de aplicativo com novos tecnologias (Vue.js, Vuex, webpack, Flexbox, CSS Grid, Sass, BEM, ITCSS)',
			},
		],
	},
	{
		id: 1,
		name: 'Nuova/Fly Age',
		url: 'https://www.linkedin.com/company/fly-age/',
		role: {
			en: 'Front-end Developer',
			'pt-br': 'Desenvolvedor Front-end',
		},
		when: {
			from: 'Ago 2016',
			to: 'Jun 2018',
		},
		activities: [
			{
				en: 'Landing pages development',
				'pt-br': 'Desenvolvimento de landing pages',
			},
			{
				en: 'Static websites maintenance (SharePoint and WordPress)',
				'pt-br': 'Manutenção de páginas estáticas (SharePoint e WordPress)',
			},
			{
				en: 'Email marketing layout development',
				'pt-br': 'Desenvolvimento de layout do e-mail marketing',
			},
		],
	},
];
