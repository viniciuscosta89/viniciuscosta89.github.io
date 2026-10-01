import type { IconType } from 'react-icons';

export type ExperienceCategoryId =
	| 'languages'
	| 'frameworks'
	| 'styling'
	| 'tooling'
	| 'ai';

export interface ExperienceCategoryType {
	id: ExperienceCategoryId;
	label: string;
}

export interface ExperienceItemsType {
	name: string;
	category: ExperienceCategoryId;
	icon?: IconType;
	startDate: string; // ISO date, e.g. '2016-08-01'
	endDate?: string; // ISO date; omit if still actively used (counts up to today)
}

export interface ExperiencePracticeType {
	name: string;
	icon?: IconType;
}
