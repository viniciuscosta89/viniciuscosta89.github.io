import type {
	ExperienceCategoryType,
	ExperienceItemsType,
	ExperiencePracticeType,
} from '@type/experience';
import { FaPenRuler, FaUniversalAccess } from 'react-icons/fa6';
import { LuComponent, LuMonitorSmartphone, LuRefreshCw } from 'react-icons/lu';
import {
	SiClaude,
	SiCss,
	SiCypress,
	SiGit,
	SiGithubcopilot,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiReactquery,
	SiSass,
	SiStorybook,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
} from 'react-icons/si';

export const experienceCategories: ExperienceCategoryType[] = [
	{ id: 'languages', label: 'Languages' },
	{ id: 'frameworks', label: 'Frameworks & Libraries' },
	{ id: 'styling', label: 'Styling & Animation' },
	{ id: 'tooling', label: 'Testing & Tooling' },
	{ id: 'ai', label: 'AI-assisted Development' },
];

// Dates are grounded in the job history in `@data/jobs` (see each job's
// `when`/`activities`). Skills without an `endDate` are still in active use
// and keep accumulating years; skills with one stopped being used when that
// job/period ended and are shown under "Previously".
export const experienceItems: ExperienceItemsType[] = [
	{
		name: 'HTML',
		category: 'languages',
		icon: SiHtml5,
		startDate: '2016-08-01',
	},
	{
		name: 'JavaScript',
		category: 'languages',
		icon: SiJavascript,
		startDate: '2017-08-01',
	},
	{
		name: 'TypeScript',
		category: 'languages',
		icon: SiTypescript,
		startDate: '2021-10-01',
	},
	{
		name: 'React',
		category: 'frameworks',
		icon: SiReact,
		startDate: '2021-10-01',
	},
	{
		name: 'Next.js',
		category: 'frameworks',
		icon: SiNextdotjs,
		startDate: '2024-07-01',
	},
	{
		name: 'TanStack Query',
		category: 'frameworks',
		icon: SiReactquery,
		startDate: '2024-07-01',
	},
	{ name: 'Zustand', category: 'frameworks', startDate: '2024-07-01' },
	{
		name: 'Vue',
		category: 'frameworks',
		icon: SiVuedotjs,
		startDate: '2020-01-01',
		endDate: '2021-10-01',
	},
	{
		name: 'AEM',
		category: 'frameworks',
		startDate: '2021-10-01',
		endDate: '2024-07-01',
	},
	{ name: 'CSS', category: 'styling', icon: SiCss, startDate: '2016-08-01' },
	{
		name: 'TailwindCSS',
		category: 'styling',
		icon: SiTailwindcss,
		startDate: '2024-07-01',
	},
	{ name: 'Motion', category: 'styling', startDate: '2024-07-01' },
	{
		name: 'Sass',
		category: 'styling',
		icon: SiSass,
		startDate: '2019-01-01',
		endDate: '2023-06-01',
	},
	{ name: 'Git', category: 'tooling', icon: SiGit, startDate: '2016-08-01' },
	{
		name: 'Cypress',
		category: 'tooling',
		icon: SiCypress,
		startDate: '2024-07-01',
	},
	{
		name: 'Storybook',
		category: 'tooling',
		icon: SiStorybook,
		startDate: '2024-07-01',
	},
	{
		name: 'GitHub Copilot',
		category: 'ai',
		icon: SiGithubcopilot,
		startDate: '2026-01-01',
	},
	{
		name: 'Claude Code',
		category: 'ai',
		icon: SiClaude,
		startDate: '2026-01-01',
	},
];

// Practices have no meaningful start date to count years from, so they're
// rendered by name only.
export const practiceItems: ExperiencePracticeType[] = [
	{ name: 'Accessibility', icon: FaUniversalAccess },
	{ name: 'UI/UX', icon: FaPenRuler },
	{ name: 'Design Systems', icon: LuComponent },
	{ name: 'Responsive Design', icon: LuMonitorSmartphone },
	{ name: 'Agile', icon: LuRefreshCw },
];
