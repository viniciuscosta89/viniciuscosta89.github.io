export interface ProjectsType {
	imgs: {
		large: string;
		small: string;
	};
	alt: string;
	name: string;
	live: string;
	code?: string;
	stack: string[];
}

export const projects: ProjectsType[] = [
	{
		imgs: {
			large: 'thumbnail-prudential-large.webp',
			small: 'thumbnail-prudential-small.webp',
		},
		alt: 'Prudential screenshot',
		name: 'Prudential',
		live: 'https://www.prudential.com.br',
		stack: ['HTML', 'CSS (Sass)', 'JavaScript', 'AEM', 'BEM', 'React', 'Typescript', 'Jest'],
	},
	{
		imgs: {
			large: 'thumbnail-marvel-characters-large.webp',
			small: 'thumbnail-marvel-characters-small.webp',
		},
		alt: 'marvel-characters screenshot',
		name: 'Marvel Characters',
		live: 'https://marvel-characters-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/marvel-characters',
		stack: ['React', 'TypeScript', 'styled-components', 'Vite', 'react-query', 'Marvel API', 'Rest API'],
	},
	{
		imgs: {
			large: 'thumbnail-news-homepage-large.webp',
			small: 'thumbnail-news-homepage-small.webp',
		},
		alt: 'News homepage screenshot',
		name: 'News Homepage',
		live: 'https://news-homepage-strapi-vue-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/news-homepage-strapi-vue-front',
		stack: ['Vue 3', 'Sass', 'TypeScript', 'Strapi', 'Vite', 'Pinia', 'vue-query'],
	},
	{
		imgs: {
			large: 'thumbnail-space-tourism-website-large.webp',
			small: 'thumbnail-space-tourism-website-small.webp',
		},
		alt: 'Space Tourism website screenshot',
		name: 'Space Tourism website',
		live: 'https://space-tourism-website-viniciuscosta89.vercel.app/',
		code: 'https://github.com/viniciuscosta89/space-tourism-website',
		stack: ['React', 'Astro', 'TypeScript', 'Sass', 'BEM', 'Swiper'],
	},
];
