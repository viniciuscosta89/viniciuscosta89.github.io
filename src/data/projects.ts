import type { ProjectsType } from '@type/projects';
import prudentialThumbnailLarge from '@assets/thumbnail-prudential-large.webp';
import prudentialThumbnailSmall from '@assets/thumbnail-prudential-small.webp';

import marvelThumbnailLarge from '@assets/thumbnail-marvel-characters-large.webp';
import marvelThumbnailSmall from '@assets/thumbnail-marvel-characters-small.webp';

import newsHomepageThumbnailLarge from '@assets/thumbnail-news-homepage-large.webp';
import newsHomepageThumbnailSmall from '@assets/thumbnail-news-homepage-small.webp';

import spaceTourismThumbnailLarge from '@assets/thumbnail-space-tourism-website-large.webp';
import spaceTourismThumbnailSmall from '@assets/thumbnail-space-tourism-website-small.webp';

import entertainmentWebAppLarge from '@assets/projects/thumbnail-entertainment-web-app-nextjs-large.webp';
import entertainmentWebAppSmall from '@assets/projects/thumbnail-entertainment-web-app-nextjs-small.jpg';

import interactiveCardDetailsFormSvelteLarge from '@assets/projects/thumbnail-interactive-card-details-form-svelte-large.webp';
import interactiveCardDetailsFormSvelteSmall from '@assets/projects/thumbnail-interactive-card-details-form-svelte-small.jpg';

import devjobsWebAppLarge from '@assets/projects/thumbnail-devjobs-web-app-large.webp';
import devjobsWebAppSmall from '@assets/projects/thumbnail-devjobs-web-app-small.jpg';

export const projects: ProjectsType[] = [
	{
		imgs: {
			large: devjobsWebAppLarge,
			small: devjobsWebAppSmall,
		},
		alt: 'Devjobs web app screenshot',
		name: 'Devjobs web app',
		live: 'https://devjobs-web-app-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/devjobs-web-app',
		stack: [
			'Vue 3',
			'Pinia',
			'TypeScript',
			'Tailwind CSS',
			'TanStack Query',
			'Vue Router',
			'Bun',
		],
	},
	{
		imgs: {
			large: interactiveCardDetailsFormSvelteLarge,
			small: interactiveCardDetailsFormSvelteSmall,
		},
		alt: 'Interactive card details form screenshot',
		name: 'Interactive card details form',
		live: 'https://interactive-card-details-form-svelte-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/interactive-card-details-form-svelte',
		stack: [
			'Svelte',
			'SvelteKit',
			'TypeScript',
			'Sass',
			'Felte',
			'Zod',
			'Svelte Motion',
			'Project IDX',
		],
	},
	{
		imgs: {
			large: entertainmentWebAppLarge,
			small: entertainmentWebAppSmall,
		},
		alt: 'Entertainment web app screenshot',
		name: 'Entertainment web app',
		live: 'https://entertainment-web-app-nextjs-viniciuscosta89.vercel.app',
		code: 'https://github.com/viniciuscosta89/entertainment-web-app-nextjs',
		stack: [
			'React',
			'Next.js',
			'TypeScript',
			'styled-components',
			'Vite',
			'TanStack Query',
			'axios',
			'Rest API',
			'Framer Motion',
			'Supabase',
			'NextAuth',
		],
	},
	{
		imgs: {
			large: prudentialThumbnailLarge,
			small: prudentialThumbnailSmall,
		},
		alt: 'Prudential screenshot',
		name: 'Prudential',
		live: 'https://www.prudential.com.br',
		stack: [
			'HTML',
			'CSS (Sass)',
			'JavaScript',
			'AEM',
			'BEM',
			'React',
			'Typescript',
			'Jest',
		],
	},
	{
		imgs: {
			large: marvelThumbnailLarge,
			small: marvelThumbnailSmall,
		},
		alt: 'marvel-characters screenshot',
		name: 'Marvel Characters',
		live: 'https://marvel-characters-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/marvel-characters',
		stack: [
			'React',
			'TypeScript',
			'styled-components',
			'Vite',
			'react-query',
			'Marvel API',
			'Rest API',
		],
	},
	{
		imgs: {
			large: newsHomepageThumbnailLarge,
			small: newsHomepageThumbnailSmall,
		},
		alt: 'News homepage screenshot',
		name: 'News Homepage',
		live: 'https://news-homepage-strapi-vue-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/news-homepage-strapi-vue-front',
		stack: [
			'Vue 3',
			'Sass',
			'TypeScript',
			'Strapi',
			'Vite',
			'Pinia',
			'vue-query',
		],
	},
	{
		imgs: {
			large: spaceTourismThumbnailLarge,
			small: spaceTourismThumbnailSmall,
		},
		alt: 'Space Tourism website screenshot',
		name: 'Space Tourism website',
		live: 'https://space-tourism-website-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/space-tourism-website',
		stack: ['React', 'Astro', 'TypeScript', 'Sass', 'BEM', 'Swiper'],
	},
];
