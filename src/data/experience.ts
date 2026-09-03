import type { ExperienceItemsType } from '@type/experience';

// Dates are grounded in the job history in `@data/jobs` (see each job's
// `when`/`activities`). Skills without an `endDate` are still in active use
// and keep accumulating years; skills with one stopped being used when that
// job/period ended.
export const experienceItems: ExperienceItemsType[] = [
	{ name: 'HTML', startDate: '2016-08-01' },
	{ name: 'CSS', startDate: '2016-08-01' },
	{ name: 'Sass', startDate: '2019-01-01', endDate: '2023-06-01' },
	{ name: 'JavaScript', startDate: '2017-08-01' },
	{ name: 'React', startDate: '2021-10-01' },
	{ name: 'Vue', startDate: '2020-01-01', endDate: '2021-10-01' },
	{ name: 'TypeScript', startDate: '2021-10-01' },
	{ name: 'AEM', startDate: '2021-10-01', endDate: '2024-07-01' },
	{ name: 'Git', startDate: '2016-08-01' },
	{ name: 'Agile', startDate: '2021-10-01' },
	{ name: 'Storybook', startDate: '2024-07-01' },
	{ name: 'Cypress', startDate: '2024-07-01' },
];
